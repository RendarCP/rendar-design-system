# 수정 완료된 이슈들

## ✅ useModal 참조 문제 해결

### 문제점
- `useModal` 훅이 core 패키지에 있었음
- `ModalDispatchContext`를 참조하는데, 이는 emotion 패키지의 ModalProvider에만 존재
- core 패키지는 emotion에 의존하면 안 됨 (의존성 방향 위반)

### 해결 방법
1. **core 패키지에서 제거**
   - `packages/core/src/hooks/useModal.ts` 삭제
   - `packages/core/src/index.ts`에서 useModal export 제거

2. **emotion 패키지로 이동**
   - `packages/emotion/src/hooks/useModal.ts` 생성
   - `packages/emotion/src/hooks/index.ts` 생성
   - emotion의 ModalProvider와 함께 사용

3. **emotion index.ts 수정**
   - core에서 useModal re-export 제거
   - emotion 자체 hooks에서 useModal export 추가

## 📦 최종 패키지 구조

### @rendar/core (의존성 없음)
```
packages/core/src/
├── types/
│   ├── Polymorphic.ts
│   └── index.ts
├── hooks/
│   ├── useCallbackRef.ts
│   ├── useClickAway.ts
│   ├── useControlled.ts
│   ├── useFocusReturn.ts
│   ├── useFocusTrap/
│   ├── useId.ts
│   ├── useIsomorphicEffect/
│   ├── useResponsive.ts
│   ├── useToggle.ts
│   └── useTransition.ts
├── utils/
│   ├── addAlpha.ts
│   ├── clamp.ts
│   └── toRgba.ts
├── constants/
│   └── index.ts
└── index.ts
```

**Export 내용:**
- ✅ 순수 React 훅 (컨텍스트 의존 없음)
- ✅ 유틸리티 함수
- ✅ 타입 정의
- ✅ 상수

### @rendar/emotion (core에 의존)
```
packages/emotion/src/
├── components/
│   └── [모든 컴포넌트들]
├── theme/
│   └── [테마 관련 파일들]
├── contexts/
│   └── modal/
│       └── ModalProvider.tsx
├── hooks/
│   ├── useModal.ts (NEW!)
│   └── index.ts (NEW!)
└── index.ts
```

**Export 내용:**
- ✅ @rendar/core의 모든 것 (re-export)
- ✅ Emotion 컴포넌트들
- ✅ 테마 시스템
- ✅ useModal (emotion 전용)
- ✅ ModalProvider, ModalContext

### @rendar/tailwind (core에 의존)
```
packages/tailwind/src/
├── components/
│   └── Button/
├── styles/
│   └── globals.css
├── utils/
│   └── cn.ts
└── index.ts
```

**Export 내용:**
- ✅ @rendar/core의 모든 것 (re-export)
- ✅ Tailwind 컴포넌트들
- ✅ cn 유틸리티

## 🔄 의존성 그래프

```
@rendar/core (독립)
    ↑
    ├── @rendar/emotion (core 의존)
    └── @rendar/tailwind (core 의존)
```

## ✅ 해결된 문제들

1. **순환 참조 방지**
   - core는 어떤 패키지에도 의존하지 않음
   - emotion과 tailwind만 core에 의존

2. **명확한 책임 분리**
   - core: 공통 로직만
   - emotion: Emotion 전용 기능
   - tailwind: Tailwind 전용 기능

3. **타입 안정성**
   - 각 패키지가 필요한 타입만 가짐
   - emotion 전용 타입은 emotion에만 존재

## 📝 사용 예시

### @rendar/core 사용
```typescript
import { useToggle, clamp } from '@rendar/core';

function MyComponent() {
  const [isOpen, toggle] = useToggle(false);
  const value = clamp(50, 0, 100);
  // ...
}
```

### @rendar/emotion 사용
```typescript
import { 
  Button, 
  useModal,           // emotion 전용
  ModalProvider,      // emotion 전용
  useToggle,          // core에서 re-export
  clamp               // core에서 re-export
} from '@rendar/emotion';

function App() {
  const { openModal, closeModal } = useModal();
  
  return (
    <ModalProvider>
      <Button onClick={() => openModal({ content: 'Hello' })}>
        Open Modal
      </Button>
    </ModalProvider>
  );
}
```

### @rendar/tailwind 사용
```typescript
import { 
  Button,
  cn,                 // tailwind 전용
  useToggle,          // core에서 re-export
  clamp               // core에서 re-export
} from '@rendar/tailwind';

function MyComponent() {
  const [isActive, toggle] = useToggle(false);
  
  return (
    <Button 
      className={cn('base-class', isActive && 'active')}
      onClick={toggle}
    >
      Toggle
    </Button>
  );
}
```

## 🎯 다음 단계

1. **빌드 테스트**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Import 경로 수정**
   - emotion 컴포넌트들의 상대 경로를 `@rendar/core`로 변경

3. **Storybook 테스트**
   ```bash
   pnpm storybook:emotion
   ```

---

**수정 완료일**: 2025-11-08  
**상태**: ✅ 참조 문제 해결 완료

