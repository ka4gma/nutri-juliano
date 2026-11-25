import { chromium } from 'playwright';
const b = await chromium.launch({ channel: 'msedge' });
for (const [w, h, label] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const c = await b.newContext({ viewport: { width: w, height: h } });
  const p = await c.newPage();
  await p.addInitScript(() => {
    window.__m = { lcp: 0, cls: 0 };
    new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__m.lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__m.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  });
  await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2500);
  const m = await p.evaluate(() => ({ ...window.__m, bytes: performance.getEntriesByType('resource').reduce((a, r) => a + (r.transferSize || r.encodedBodySize || 0), 0) }));
  console.log(label, JSON.stringify({ lcp_ms: Math.round(m.lcp), cls: +m.cls.toFixed(4), kb: Math.round(m.bytes / 1024) }));
  await c.close();
}
await b.close();
