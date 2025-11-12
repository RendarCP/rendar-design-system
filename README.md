# Rendar Design System

> 🎨 Emotion과 Tailwind CSS 기반의 모던 React 디자인 시스템

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)
[![Turborepo](https://img.shields.io/badge/built%20with-Turborepo-ef4444.svg)](https://turbo.build/repo)

## 📦 패키지

이 모노레포는 세 가지 패키지로 구성되어 있습니다:

### [@rendar/core](./packages/core)
공통 유틸리티, 타입, React 훅을 제공하는 코어 패키지

- ✅ TypeScript 타입 정의
- ✅ React 커스텀 훅
- ✅ 유틸리티 함수
- ✅ 공통 상수

### [@rendar/emotion](./packages/emotion)
Emotion 기반의 스타일 컴포넌트 라이브러리

- 🎨 CSS-in-JS (Emotion)
- 🎭 테마 시스템
- 📚 Storybook 문서
- 🔥 30+ 컴포넌트

### [@rendar/tailwind](./packages/tailwind)
Tailwind CSS 기반의 유틸리티 우선 컴포넌트 라이브러리

- ⚡ Tailwind CSS
- 🎯 유틸리티 우선
- 📦 트리 쉐이킹 지원
- 🚀 경량화된 번들

## 🚀 빠른 시작

### 설치

#### Emotion 버전
```bash
npm install @rendar/emotion
# or
pnpm add @rendar/emotion
```

#### Tailwind 버전
```bash
npm install @rendar/tailwind tailwindcss
# or
pnpm add @rendar/tailwind tailwindcss
```

### 사용 예시

#### Emotion
```tsx
import { RdProvider, Button, Input } from '@rendar/emotion';

function App() {
  return (
    <RdProvider>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </RdProvider>
  );
}
```

#### Tailwind
```tsx
import { Button, Input } from '@rendar/tailwind';
import '@rendar/tailwind/dist/styles.css';

function App() {
  return (
    <>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </>
  );
}
```

## 🛠 개발 환경 설정

### 필수 요구사항

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 설치

```bash
# pnpm 설치 (전역)
npm install -g pnpm

# 의존성 설치
pnpm install
```

### 개발 스크립트

```bash
# 모든 패키지 빌드
pnpm build

# 특정 패키지 빌드
pnpm build:core
pnpm build:emotion
pnpm build:tailwind

# 개발 모드 (watch mode)
pnpm dev

# Storybook 실행
pnpm storybook:emotion  # Emotion 버전
pnpm storybook:tailwind # Tailwind 버전

# 린트 검사
pnpm lint

# 테스트
pnpm test

# 전체 정리
pnpm clean
```

## 📁 프로젝트 구조

```
rendar-design-system/
├── packages/
│   ├── core/              # 공통 코어 패키지
│   │   ├── src/
│   │   │   ├── types/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   │   └── constants/
│   │   └── package.json
│   │
│   ├── emotion/           # Emotion 기반 패키지
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── theme/
│   │   │   └── contexts/
│   │   ├── .storybook/
│   │   └── package.json
│   │
│   └── tailwind/          # Tailwind 기반 패키지
│       ├── src/
│       │   ├── components/
│       │   ├── styles/
│       │   └── utils/
│       ├── .storybook/
│       └── package.json
│
├── .changeset/            # 버전 관리
├── pnpm-workspace.yaml    # pnpm workspace 설정
├── turbo.json             # Turborepo 설정
└── package.json           # Root package.json
```

## 🎨 컴포넌트

### Layout
- View

### Inputs
- Button
- Input
- Checkbox
- Radio
- Select

### Display
- Avatar
- Badge
- Card
- Chip
- Divider
- Spinner

### Feedback
- Alert
- Dialog
- Drawer
- Modal

### Navigation
- Breadcrumbs
- Menu
- Tab

### Data Display
- Accordion
- List

## 🔄 버전 관리

이 프로젝트는 [Changesets](https://github.com/changesets/changesets)를 사용하여 버전을 관리합니다.

```bash
# 변경사항 기록
pnpm changeset

# 버전 업데이트
pnpm version

# 배포
pnpm release
```

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 단계를 따라주세요:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👥 기여자

- **Seong Wook Cho** - *Initial work* - [@RendarCP](https://github.com/RendarCP)

## 🔗 링크

- [Documentation](https://github.com/RendarCP/rendar-design-system)
- [Issue Tracker](https://github.com/RendarCP/rendar-design-system/issues)
- [Changelog](https://github.com/RendarCP/rendar-design-system/blob/main/CHANGELOG.md)

## 📊 기술 스택

- **패키지 매니저**: pnpm
- **빌드 도구**: Turborepo, Vite
- **스타일링**: Emotion, Tailwind CSS
- **개발 도구**: TypeScript, ESLint, Prettier, Storybook
- **버전 관리**: Changesets

---

Made with ❤️ by Rendar Design System Team
