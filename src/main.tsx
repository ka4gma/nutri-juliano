import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/instrument-sans/wdth.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';
import './styles/chapters.css';
import App from './App';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
// O build injeta o HTML pré-renderizado; em dev o #root está vazio.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
