// OG image (1200x630) e apple-touch-icon a partir de fontes locais.
import { chromium } from 'playwright';
import sharp from 'sharp';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const b = await chromium.launch({ channel: 'msedge' });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto(pathToFileURL(resolve('scripts/og.html')).href);
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(600);
await p.screenshot({ path: 'qa/og.png' });
await b.close();
await sharp('qa/og.png').jpeg({ quality: 84, mozjpeg: true }).toFile('public/og.jpg');
await sharp('public/favicon.svg', { density: 300 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('ok');
