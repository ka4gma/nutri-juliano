import { chromium } from 'playwright';
const [w = 1440, h = 900, tag = 'd'] = process.argv.slice(2).map((x, i) => (i < 2 ? Number(x) : x));
const b = await chromium.launch({ channel: 'msedge' });
const c = await b.newContext({ viewport: { width: w, height: h } });
const p = await c.newPage();
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await p.evaluate(() => localStorage.setItem('nutrijuliano_analytics_consent', 'rejected'));
await p.reload({ waitUntil: 'networkidle' });
await p.waitForTimeout(1800);
for (const id of ['posicionamento', 'sobre', 'acompanhamento', 'para-quem', 'como-funciona', 'avaliacoes', 'duvidas', 'contato']) {
  await p.evaluate((i) => {
    const el = document.getElementById(i);
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'instant' });
  }, id);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `qa/st-${tag}-${id}.png` });
}
await b.close();
