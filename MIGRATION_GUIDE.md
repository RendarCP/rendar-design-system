# 모노레포 마이그레이션 가이드

## ✅ 완료된 작업

### 1. 모노레포 초기 설정
- ✅ pnpm-workspace.yaml 생성
- ✅ turbo.json 설정
- ✅ Root package.json 수정
- ✅ packages/ 디렉토리 구조 생성

### 2. @rendar/core 패키지
- ✅ package.json 설정
- ✅ TypeScript 설정 (tsconfig.json)
- ✅ Vite 빌드 설정
- ✅ 공통 타입, 훅, 유틸리티 이동
- ✅ README.md 작성

### 3. @rendar/emotion 패키지
- ✅ package.json 설정
- ✅ TypeScript 설정
- ✅ Vite 빌드 설정 (Emotion 플러그인 포함)
- ✅ 컴포넌트, 테마, 컨텍스트 이동
- ✅ Storybook 설정 이동
- ✅ README.md 작성

### 4. @rendar/tailwind 패키지
- ✅ package.json 설정
- ✅ TypeScript 설정
- ✅ Vite 빌드 설정
- ✅ Tailwind CSS 설정 (tailwind.config.js, postcss.config.js)
- ✅ 기본 Button 컴포넌트 구현
- ✅ 유틸리티 함수 (cn) 구현
- ✅ README.md 작성

### 5. 추가 설정
- ✅ Changesets 설정
- ✅ Root README.md 작성
- ✅ .gitignore 업데이트

## 🚀 다음 단계

### 1. 의존성 설치

```bash
# pnpm 설치 (아직 설치하지 않았다면)
npm install -g pnpm

# 모든 패키지의 의존성 설치
pnpm install
```

### 2. 각 패키지 빌드

```bash
# 전체 빌드 (권장)
pnpm build

# 또는 개별 빌드
pnpm build:core      # @rendar/core 빌드
pnpm build:emotion   # @rendar/emotion 빌드
pnpm build:tailwind  # @rendar/tailwind 빌드
```

### 3. 빌드 검증

각 패키지의 `dist/` 디렉토리에 다음 파일들이 생성되었는지 확인:
- `index.es.js` - ES Module 번들
- `index.cjs.js` - CommonJS 번들
- `index.d.ts` - TypeScript 타입 정의
- `*.map` - 소스맵 파일

### 4. Storybook 실행

```bash
# Emotion 버전 Storybook
pnpm storybook:emotion

# Tailwind 버전 Storybook (아직 스토리가 없음)
pnpm storybook:tailwind
```

### 5. 개발 모드 테스트

```bash
# 모든 패키지를 watch 모드로 실행
pnpm dev
```

## 🔧 해결해야 할 문제들

### 1. Import 경로 수정

emotion 패키지의 컴포넌트들이 공통 코드를 참조할 때, 경로를 수정해야 합니다:

```typescript
// 변경 전
import { useToggle } from '../../hooks/useToggle';
import { clamp } from '../../utils/clamp';

// 변경 후
import { useToggle, clamp } from '@rendar/core';
```

### 2. Emotion 패키지의 Storybook 설정 수정

`.storybook/main.ts` 파일에서 경로를 수정해야 할 수 있습니다:

```typescript
// packages/emotion/.storybook/main.ts
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // ...
};
```

### 3. Tailwind 패키지 컴포넌트 마이그레이션

현재 Button 컴포넌트만 구현되어 있습니다. 나머지 컴포넌트들을 Emotion에서 Tailwind로 마이그레이션해야 합니다.

우선순위:
1. Input
2. Checkbox, Radio
3. Select
4. Modal/Dialog
5. Card, Avatar, Badge
6. 나머지 컴포넌트들

### 4. 테스트 추가

각 패키지에 테스트를 추가해야 합니다:

```bash
# 테스트 라이브러리 설치 (각 패키지에)
pnpm add -D @testing-library/react @testing-library/jest-dom vitest
```

## 📝 체크리스트

### 즉시 해야 할 작업
- [ ] `pnpm install` 실행
- [ ] `pnpm build` 실행하여 빌드 오류 확인
- [ ] emotion 패키지의 import 경로 수정
- [ ] Storybook 실행 테스트

### 단기 작업 (1-2주)
- [ ] Tailwind 패키지에 주요 컴포넌트 5개 구현
- [ ] 각 패키지에 기본 테스트 추가
- [ ] CI/CD 설정 (GitHub Actions)
- [ ] NPM 배포 설정

### 중기 작업 (1개월)
- [ ] Tailwind 패키지의 모든 컴포넌트 구현
- [ ] 각 컴포넌트의 Storybook 스토리 작성
- [ ] 문서 사이트 구축 (Docusaurus 또는 Nextra)
- [ ] 접근성(a11y) 테스트 추가

## 🐛 알려진 이슈

1. **Emotion 패키지의 babel 플러그인**
   - vite.config.ts에 `@emotion/babel-plugin`이 필요할 수 있습니다
   - 필요시 설치: `pnpm add -D @emotion/babel-plugin`

2. **Tailwind 패키지의 CSS 번들링**
   - CSS 파일이 제대로 번들링되는지 확인 필요
   - `dist/styles.css` 파일 생성 확인

3. **타입 정의 생성**
   - `vite-plugin-dts`가 모든 타입을 제대로 생성하는지 확인
   - 필요시 `tsconfig.json` 조정

## 💡 팁

### 빠른 개발 워크플로우

```bash
# 터미널 1: core 패키지 watch
cd packages/core && pnpm dev

# 터미널 2: emotion 패키지 watch
cd packages/emotion && pnpm dev

# 터미널 3: Storybook 실행
pnpm storybook:emotion
```

### 의존성 추가

```bash
# 특정 패키지에 의존성 추가
pnpm add <package> --filter @rendar/emotion

# 모든 패키지에 dev 의존성 추가
pnpm add -D <package> -w
```

### 패키지 간 의존성

workspace 프로토콜을 사용하여 로컬 패키지를 참조:

```json
{
  "dependencies": {
    "@rendar/core": "workspace:*"
  }
}
```

## 📞 도움이 필요하신가요?

이슈가 발생하면 다음을 확인하세요:

1. `pnpm install`을 실행했는지
2. Node.js 버전이 18 이상인지
3. pnpm 버전이 8 이상인지
4. 각 패키지의 `node_modules`가 제대로 설치되었는지

---

**작성일**: 2025-11-08
**버전**: 1.0.0

