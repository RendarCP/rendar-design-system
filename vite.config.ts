import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    tsconfigPaths(), // 절대 경로 생성시 사용된다.
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "rendar-design-system",
      formats: ["es", "cjs"],
      fileName: (format) => `rendar-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
