// Gera as variantes otimizadas das fotografias reais (sem upscale, sem retoque do profissional).
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'docs/audit/assets-original';
const OUT = 'public/images';
mkdirSync(OUT, { recursive: true });

const jobs = [
  // Retrato da hero: cor original. Só redimensiona.
  { src: 'hero-854.webp', base: 'juliano-retrato', widths: [480, 720, 854], grade: null },
  // Foto da palestra: grade leve (dessatura e esfria sombras) para conviver com a paleta.
  { src: 'palestrante-urcamp.webp', base: 'juliano-palestra', widths: [480, 720, 960], grade: 'palestra' },
];

for (const j of jobs) {
  const meta = await sharp(`${SRC}/${j.src}`).metadata();
  for (const w of j.widths) {
    if (w > meta.width) continue; // nunca aumentar
    let p = sharp(`${SRC}/${j.src}`).resize({ width: w });
    if (j.grade === 'palestra') {
      p = p.modulate({ saturation: 0.6, brightness: 0.95 }).linear(1.03, -3);
    }
    await p.clone().webp({ quality: 80, effort: 5 }).toFile(`${OUT}/${j.base}-${w}.webp`);
    await p.clone().avif({ quality: 52, effort: 5 }).toFile(`${OUT}/${j.base}-${w}.avif`);
    console.log('ok', j.base, w);
  }
}
