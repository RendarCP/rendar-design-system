import { defineConfig } from "vite"; // Vite 설정을 정의하기 위한 함수
import path from "path"; // 파일 및 디렉토리 경로 작업을 위한 Node.js 모듈
import react from "@vitejs/plugin-react"; // React와의 통합을 위한 Vite 플러그인
import dts from "vite-plugin-dts"; // TypeScript 정의 파일 생성을 위한 플러그인
import tsconfigPaths from "vite-tsconfig-paths"; // tsconfig.json의 경로 설정을 Vite에 반영하기 위한 플러그인

export default defineConfig({
  plugins: [
    react(), // React 플러그인 사용
    dts({
      insertTypesEntry: true, // 타입 정의 파일을 생성할 때 entry point를 추가
    }),
    tsconfigPaths(), // tsconfig.json의 paths 옵션을 Vite에서 사용할 수 있게 해줌
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"), // 라이브러리의 진입점 파일
      name: "rendar-design-system", // 라이브러리의 글로벌 네임스페이스
      formats: ["es", "cjs"], // 번들링 포맷: ES Module과 CommonJS
      fileName: (format) => `index.${format}.js`, // 생성될 파일 이름
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "@emotion/styled",
        "@emotion/server",
      ], // 번들링에서 제외할 외부 모듈
    },
    sourcemap: true, // 소스맵 생성 여부 (디버깅 용이)
    emptyOutDir: true, // 빌드 시 출력 디렉토리를 비울지 여부
  },
});
