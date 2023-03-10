import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://106.14.223.52',
        changeOrigin: true,
      },
      '/public': {
        target: 'http://106.14.223.52',
        changeOrigin: true,
      },
    },
  },
});
