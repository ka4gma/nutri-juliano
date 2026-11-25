// Lighthouse N execuções (padrão 3) por perfil; imprime mediana de performance/LCP/TBT/FCP.
import lighthouse from 'lighthouse';
import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:4173/';
const N = Number(process.argv[3] || 3);
const br = await chromium.launch({ channel: 'msedge', args: ['--remote-debugging-port=9334'] });
const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
for (const form of ['mobile', 'desktop']) {
  const cfg = form === 'desktop' ? { extends: 'lighthouse:default', settings: { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttlingMethod: 'simulate' } } : undefined;
  const r = { perf: [], lcp: [], tbt: [], fcp: [] };
  for (let i = 0; i < N; i++) {
    const l = (await lighthouse(url, { port: 9334, output: 'json', logLevel: 'error' }, cfg)).lhr;
    r.perf.push(Math.round(l.categories.performance.score * 100));
    r.lcp.push(Math.round(l.audits['largest-contentful-paint'].numericValue));
    r.tbt.push(Math.round(l.audits['total-blocking-time'].numericValue));
    r.fcp.push(Math.round(l.audits['first-contentful-paint'].numericValue));
  }
  console.log(form, 'perf', r.perf.join('/'), 'med', med(r.perf), '| lcp med', med(r.lcp), '| tbt med', med(r.tbt), '| fcp med', med(r.fcp));
}
await br.close();
