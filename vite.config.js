import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages hosts this project under /Car/; keep local development at /.
  base: process.env.GITHUB_ACTIONS ? '/Car/' : '/',
  plugins: [react()],
});
