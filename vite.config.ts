import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.BASE || '/',
  plugins: [react()],
  build: { target: 'es2020', sourcemap: false, assetsInlineLimit: 0 },
  server: { port: 5173 },
});
