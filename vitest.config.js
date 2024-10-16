import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': resolve(__dirname, './src/components'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/services': resolve(__dirname, './src/services'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/models': resolve(__dirname, './src/models'),
      '@/pages': resolve(__dirname, './src/pages'),
      '@/modules': resolve(__dirname, './src/modules'),
      '@/redux': resolve(__dirname, './src/redux'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
