// Testes de comportamento. Uso: servir o build (npm run preview) e rodar: node scripts/e2e.mjs [url]
import { chromium } from 'playwright';

const URL_BASE = process.argv[2] || 'http://localhost:4173/';
const WIDTHS = [1440, 1280, 1024, 768, 390, 360];
const results = [];
const ok = (name, pass, info = '') => {
  results.push({ name, pass, info });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + info : ''}`);
};

const ORIGINAL_H1 = 'Nutrição esportiva personalizada para performance, saúde e estética.';
const MENSAGENS = [
  'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta presencial em Bagé/RS.',
  'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta online.',
  'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta.',
];

const browser = await chromium.launch({ channel: 'msedge' });

async function open(width, opts = {}) {
  const ctx = await browser.newContext({ viewport: { width, height: width >= 1024 ? 900 : 844 }, ...opts });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('requestfailed', (r) => errors.push('requestfailed ' + r.url()));
  await page.goto(URL_BASE, { waitUntil: 'networkidle' });
  return { ctx, page, errors };
}

// ---------- conteúdo e SEO ----------
{
  const { ctx, page, errors } = await open(1440);
  const h1 = await page.locator('h1').allInnerTexts();
  ok('um único h1', h1.length === 1);
  const h1text = (await page.locator('h1').first().textContent()).replace(/\s+/g, ' ').trim();
  ok('h1 preserva o texto original', h1text === ORIGINAL_H1, h1text);
  ok('lang pt-BR', (await page.getAttribute('html', 'lang')) === 'pt-BR');
  ok('title com CRN', (await page.title()).includes('CRN 19753'));
  ok('meta description', ((await page.getAttribute('meta[name=description]', 'content')) || '').length > 80);
  ok('canonical', !!(await page.getAttribute('link[rel=canonical]', 'href')));
  ok('og:image', !!(await page.getAttribute('meta[property="og:image"]', 'content')));
  const ld = await page.$$eval('script[type="application/ld+json"]', (n) => n.map((e) => JSON.parse(e.textContent)['@type']));
  ok('JSON-LD MedicalBusiness + FAQPage', ld.includes('MedicalBusiness') && ld.includes('FAQPage'), ld.join(','));
  const text = await page.evaluate(() => document.body.textContent.replace(/\s+/g, ' '));
  for (const must of ['CRN 19753', '+600', '30 dias', '60 a 90 minutos', 'não substitui a avaliação médica', 'Rua Silvio da Silva Tavares, 601', '+55 53 9900-2023']) {
    ok(`texto presente: "${must}"`, text.toLowerCase().includes(must.toLowerCase()));
  }
  ok('sem emoji', !/\p{Extended_Pictographic}/u.test(text.replace(/[→↗©]/g, '')));
  ok('sem erros de console no carregamento', errors.length === 0, errors.join(' | '));

  // WhatsApp
  const hrefs = await page.$$eval('a[href^="https://wa.me/"]', (a) => a.map((x) => x.href));
  ok('há CTAs de WhatsApp', hrefs.length >= 6, String(hrefs.length));
  const bad = hrefs.filter((h) => {
    const u = new globalThis.URL(h);
    return u.pathname !== '/555399002023' || !MENSAGENS.includes(u.searchParams.get('text'));
  });
  ok('todos os links wa.me usam número e mensagens verificados', bad.length === 0, bad.join(' '));
  const ext = await page.$$eval('a[target=_blank]', (a) => a.filter((x) => !/noopener/.test(x.rel)).length);
  ok('links externos com rel=noopener', ext === 0);

  // âncoras
  const anchors = await page.$$eval('a[href^="#"]', (a) => [...new Set(a.map((x) => x.getAttribute('href')))]);
  const missing = [];
  for (const h of anchors) if (h.length > 1 && !(await page.$(h))) missing.push(h);
  ok('todas as âncoras têm destino', missing.length === 0, missing.join(','));

  // imagens
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
  });
  await page.waitForTimeout(500);
  const broken = await page.$$eval('img', (i) => i.filter((x) => !x.complete || x.naturalWidth === 0).map((x) => x.src));
  ok('imagens carregadas', broken.length === 0, broken.join(','));
  const noAlt = await page.$$eval('img', (i) => i.filter((x) => !x.alt).length);
  ok('imagens com alt', noAlt === 0);

  // FAQ
  await page.evaluate(() => window.scrollTo(0, 0));
  const sum = page.locator('.faq__q').nth(2);
  await sum.scrollIntoViewIfNeeded();
  await sum.click();
  const open3 = await page.locator('.faq__item').nth(2).evaluate((e) => e.open);
  ok('FAQ abre ao clicar', open3);
  await ctx.close();
}

// ---------- overflow em todas as larguras ----------
for (const w of WIDTHS) {
  const { ctx, page, errors } = await open(w);
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  const { sw, cw } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  ok(`sem overflow horizontal em ${w}px`, sw <= cw, `${sw}/${cw}`);
  ok(`sem erros de console em ${w}px`, errors.length === 0, errors.join(' | '));
  const small = await page.evaluate(() => {
    const els = [...document.querySelectorAll('a.btn, button')].filter((e) => e.offsetParent !== null);
    return els.filter((e) => e.getBoundingClientRect().height < 40).map((e) => e.textContent.trim().slice(0, 20));
  });
  ok(`alvos de toque ≥ 40px em ${w}px`, small.length === 0, small.join(','));
  await ctx.close();
}

// ---------- menu mobile ----------
{
  const { ctx, page } = await open(390);
  const btn = page.locator('.header__menu');
  ok('menu mobile fechado por padrão', (await btn.getAttribute('aria-expanded')) === 'false');
  await btn.click();
  ok('menu abre (aria-expanded)', (await btn.getAttribute('aria-expanded')) === 'true');
  ok('menu visível', await page.locator('#menu-mobile').isVisible());
  await page.keyboard.press('Escape');
  ok('Esc fecha o menu', (await btn.getAttribute('aria-expanded')) === 'false');
  // barra mobile
  const bar = page.locator('.mbar');
  ok('barra mobile escondida na hero', (await bar.getAttribute('class')).includes('is-on') === false);
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.waitForTimeout(600);
  ok('barra mobile aparece após a hero', (await bar.getAttribute('class')).includes('is-on'));
  await page.evaluate(() => document.getElementById('contato').scrollIntoView());
  await page.waitForTimeout(1800);
  ok('barra mobile some no CTA final', !(await bar.getAttribute('class')).includes('is-on'));
  await ctx.close();
}

// ---------- header esconde ao rolar ----------
{
  const { ctx, page } = await open(1440);
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(250);
  await page.evaluate(() => window.scrollTo(0, 1400));
  await page.waitForTimeout(500);
  ok('header esconde ao rolar para baixo', (await page.locator('.header').getAttribute('class')).includes('is-hidden'));
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(500);
  ok('header volta ao rolar para cima', !(await page.locator('.header').getAttribute('class')).includes('is-hidden'));
  await ctx.close();
}

// ---------- consentimento e eventos ----------
{
  const { ctx, page } = await open(1440);
  await page.waitForSelector('.consent', { timeout: 4000 });
  ok('banner de consentimento aparece', true);
  await page.getByRole('button', { name: 'Aceitar' }).click();
  const stored = await page.evaluate(() => localStorage.getItem('nutrijuliano_analytics_consent'));
  ok('aceite persiste', stored === 'accepted');
  const ev = await page.evaluate(() => {
    document.querySelector('a[href^="https://wa.me/"]').addEventListener('click', (e) => e.preventDefault());
    document.querySelector('a[href^="https://wa.me/"]').click();
    return (window.dataLayer || []).map((d) => d.event);
  });
  ok('evento whatsapp_click vai ao dataLayer com aceite', ev.includes('whatsapp_click'), ev.join(','));
  await ctx.close();
  const c2 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p2 = await c2.newPage();
  await p2.goto(URL_BASE, { waitUntil: 'networkidle' });
  await p2.waitForSelector('.consent');
  await p2.getByRole('button', { name: 'Rejeitar' }).click();
  const ev2 = await p2.evaluate(() => {
    document.querySelector('a[href^="https://wa.me/"]').addEventListener('click', (e) => e.preventDefault());
    document.querySelector('a[href^="https://wa.me/"]').click();
    return (window.dataLayer || []).length;
  });
  ok('sem evento quando o visitante rejeita', ev2 === 0);
  await c2.close();
}

// ---------- reduced motion ----------
{
  const { ctx, page } = await open(1440, { reducedMotion: 'reduce' });
  await page.waitForTimeout(500);
  const hidden = await page.evaluate(() => {
    const rv = [...document.querySelectorAll('[data-rv]')].filter((e) => getComputedStyle(e).opacity !== '1').length;
    const mk = [...document.querySelectorAll('.mask__in')].filter((e) => getComputedStyle(e).transform !== 'none' && getComputedStyle(e).transform !== 'matrix(1, 0, 0, 1, 0, 0)').length;
    const ph = getComputedStyle(document.querySelector('.hero__photo')).clipPath;
    return { rv, mk, ph };
  });
  ok('reduced motion: conteúdo visível sem rolar', hidden.rv === 0 && hidden.mk === 0, JSON.stringify(hidden));
  ok('reduced motion: sem clip-path na foto', hidden.ph === 'none', hidden.ph);
  await ctx.close();
}

await browser.close();
const fails = results.filter((r) => !r.pass);
console.log(`\n${results.length - fails.length}/${results.length} passaram`);
process.exit(fails.length ? 1 : 0);
