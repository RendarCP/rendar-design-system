# @rendar/tailwind

Rendar Design System의 Tailwind CSS 기반 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install @rendar/tailwind tailwindcss
# or
pnpm add @rendar/tailwind tailwindcss
# or
yarn add @rendar/tailwind tailwindcss
```

## 설정

### 1. Tailwind CSS 설정

`tailwind.config.js` 파일에 다음 내용을 추가하세요:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@rendar/tailwind/dist/**/*.js',
  ],
  presets: [
    require('@rendar/tailwind/tailwind.config.js')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. CSS 임포트

메인 CSS 파일에 다음을 추가하세요:

```css
@import '@rendar/tailwind/dist/styles.css';
```

또는 JavaScript/TypeScript 파일에서:

```tsx
import '@rendar/tailwind/dist/styles.css';
```

## 사용법

```tsx
import { Button, Input } from '@rendar/tailwind';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  );
}
```

## 컴포넌트

### 현재 구현된 컴포넌트
- Button

### 예정된 컴포넌트
- Input
- Checkbox
- Radio
- Select
- Modal/Dialog
- Drawer
- Card
- Avatar
- Badge
- 그 외 다수...

## 커스터마이징

Tailwind CSS의 설정을 통해 테마를 커스터마이징할 수 있습니다:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#your-color',
        },
      },
    },
  },
};
```

## 유틸리티

### cn 함수

`cn` 함수를 사용하여 조건부 클래스를 쉽게 적용할 수 있습니다:

```tsx
import { cn } from '@rendar/tailwind';

function MyComponent({ isActive }) {
  return (
    <div className={cn(
      'base-class',
      isActive && 'active-class',
      'another-class'
    )}>
      Content
    </div>
  );
}
```

## 라이선스

MIT

