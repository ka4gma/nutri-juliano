// Pré-renderiza a LP no dist/index.html (SEO + primeira pintura sem esperar o JS).
import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

await build({ logLevel: 'error', build: { ssr: 'src/entry-server.tsx', outDir: 'dist-ssr', emptyOutDir: true, minify: false } });
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const html = render();
const file = 'dist/index.html';
const src = readFileSync(file, 'utf8');
if (!src.includes('<div id="root"></div>')) throw new Error('#root não encontrado em dist/index.html');
writeFileSync(file, src.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });
console.log(`prerender ok (${html.length} bytes de HTML)`);
