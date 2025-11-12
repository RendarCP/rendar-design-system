# @rendar/core

Rendar Design System의 공통 유틸리티, 타입, 훅을 제공하는 코어 패키지입니다.

## 설치

```bash
npm install @rendar/core
# or
pnpm add @rendar/core
# or
yarn add @rendar/core
```

## 포함 내용

### Types

- `OqComponentProps`: 컴포넌트 Props 타입
- `Polymorphic`: Polymorphic 컴포넌트 타입

### Hooks

- `useCallbackRef`: 콜백 ref 훅
- `useClickAway`: 외부 클릭 감지 훅
- `useControlled`: 제어/비제어 컴포넌트 훅
- `useFocusReturn`: 포커스 복원 훅
- `useFocusTrap`: 포커스 트랩 훅
- `useId`: 고유 ID 생성 훅
- `useIsomorphicEffect`: SSR 호환 useEffect
- `useToggle`: 토글 상태 관리 훅
- `useTransition`: 트랜지션 훅

### Utils

- `clamp`: 값 범위 제한
- `addAlpha`: 색상에 투명도 추가
- `toRgba`: 색상을 RGBA로 변환

### Constants

- 공통 상수 및 설정

## 사용 예시

```typescript
import { useToggle, clamp } from '@rendar/core';

function MyComponent() {
  const [isOpen, toggle] = useToggle(false);
  const value = clamp(50, 0, 100); // 50

  return (
    <button onClick={toggle}>
      {isOpen ? 'Open' : 'Closed'}
    </button>
  );
}
```

## 라이선스

MIT
