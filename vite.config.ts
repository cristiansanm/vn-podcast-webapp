import react from '@vitejs/plugin-react-swc';

import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
          find: '@/adapters',
          replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
        },
        {
          find: '@/pages',
          replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
        },
        {
          find: '@/utils',
          replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
        },
        {
          find: '@/assets',
          replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
        {
          find: '@/redux',
          replacement: fileURLToPath(new URL('./src/redux', import.meta.url)),
        },
        {
          find: '@/services',
          replacement: fileURLToPath(new URL('./src/services', import.meta.url)),
        },
        {
          find: '@/routes',
          replacement: fileURLToPath(new URL('./src/routes', import.meta.url)),
        },
        {
          find: '@/models',
          replacement: fileURLToPath(new URL('./src/models', import.meta.url)),
        },
        {
          find: '@/hooks',
          replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
        },
        {
          find: '@/components',
          replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
        },
        {
          find: '@/modules',
          replacement: fileURLToPath(new URL('./src/modules', import.meta.url)),
        },
      ],
    },
    build: {
      minify: isProduction ? 'esbuild' : false, // Minify in production, not in development
      rollupOptions: {
        output: {
          manualChunks: isProduction ? undefined : undefined, // Optionally concatenate assets
        },
      },
      outDir: 'dist',
    },
  };
});
