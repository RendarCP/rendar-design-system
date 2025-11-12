import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RendarTailwind',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@rendar/core',
        'tailwindcss',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return assetInfo.name || '';
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});

