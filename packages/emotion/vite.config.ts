import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RendarEmotion',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'es' : 'cjs'}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/server',
        '@emotion/cache',
        '@emotion/serialize',
        '@emotion/utils',
        '@rendar/core',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

