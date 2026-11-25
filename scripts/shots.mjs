// Capturas de QA: node scripts/shots.mjs <url> <outDir> [larguras] [--full]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const [url = 'http://localhost:4173/', out = 'qa', widths = '1440,1280,1024,768,390,360'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge' });
const report = [];
for (const w of widths.split(',').map(Number)) {
  const h = w >= 1024 ? 900 : w >= 768 ? 1024 : 844;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => ['error', 'warning'].includes(m.type()) && errors.push(`${m.type()}: ${m.text()}`));
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.setItem('nutrijuliano_analytics_consent', 'rejected'));
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(2200);
  await page.screenshot({ path: `${out}/hero-${w}.png` });
  // rolar tudo para disparar as revelações
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += Math.round(h * 0.6)) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(140);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/full-${w}.png`, fullPage: true });
  const overflow = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
    offenders: [...document.querySelectorAll('body *')]
      .filter((e) => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1 && getComputedStyle(e).position !== 'fixed')
      .slice(0, 6)
      .map((e) => e.tagName + '.' + String(e.className).slice(0, 40)),
  }));
  report.push({ w, total, overflow, errors });
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
