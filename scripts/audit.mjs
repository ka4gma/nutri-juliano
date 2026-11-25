// Lighthouse (desktop + mobile) e axe-core. Uso: node scripts/audit.mjs [url]
import lighthouse from 'lighthouse';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync, mkdirSync } from 'node:fs';

const url = process.argv[2] || 'http://localhost:4173/';
mkdirSync('qa', { recursive: true });
const lhBrowser = await chromium.launch({ channel: 'msedge', args: ['--remote-debugging-port=9333'] });
const chrome = { port: 9333, kill: () => lhBrowser.close() };
const out = {};
for (const form of ['mobile', 'desktop']) {
  const cfg = form === 'desktop' ? { extends: 'lighthouse:default', settings: { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttlingMethod: 'simulate' } } : undefined;
  const r = await lighthouse(url, { port: chrome.port, output: 'json', logLevel: 'error' }, cfg);
  const l = r.lhr;
  out[form] = {
    scores: Object.fromEntries(Object.entries(l.categories).map(([k, v]) => [k, Math.round(v.score * 100)])),
    lcp: l.audits['largest-contentful-paint'].displayValue,
    cls: l.audits['cumulative-layout-shift'].displayValue,
    tbt: l.audits['total-blocking-time'].displayValue,
    fcp: l.audits['first-contentful-paint'].displayValue,
    failed: Object.values(l.audits).filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'manual').map((a) => `${a.id}: ${a.score} ${a.displayValue || ''}`),
  };
  writeFileSync(`qa/lighthouse-${form}.json`, JSON.stringify(l));
}
await chrome.kill();

const b = await chromium.launch({ channel: 'msedge' });
out.axe = {};
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const c = await b.newContext({ viewport: { width: w, height: h } });
  const p = await c.newPage();
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate(() => localStorage.setItem('nutrijuliano_analytics_consent', 'rejected'));
  await p.reload({ waitUntil: 'networkidle' });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } });
  await p.waitForTimeout(1500);
  await p.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
  const res = await new AxeBuilder({ page: p }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']).analyze();
  out.axe[w] = res.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, help: v.help, sample: v.nodes.slice(0, 3).map((n) => n.target.join(' ') + ' :: ' + (n.failureSummary || '').split('\n')[1]) }));
  await c.close();
}
await b.close();
console.log(JSON.stringify(out, null, 1));
