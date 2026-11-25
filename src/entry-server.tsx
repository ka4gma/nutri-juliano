import { renderToString } from 'react-dom/server';
import App from './App';

/** Usado só no build (scripts/prerender.mjs): gera o HTML estático da LP para SEO e primeira pintura. */
export function render() {
  return renderToString(<App />);
}
