import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'src'),
  server: {
    port: 3000,
  },
  build: {
    outDir: '../ui',
  },
  plugins: [solidPlugin()],
});
