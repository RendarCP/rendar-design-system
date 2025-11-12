# 패키지 체크 리포트

## ✅ 수정 완료 사항

### 1. @rendar/core 패키지
- ✅ `useModal`, `useResponsive` 훅 export 추가
- ✅ `OqComponentProps` 제거 (emotion 전용이므로)
- ✅ types/index.ts에서 Polymorphic 타입만 export

**현재 구조:**
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
│   ├── useModal.ts
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

### 2. @rendar/emotion 패키지
- ✅ 컴포넌트들을 `src/components/` 디렉토리로 이동
- ✅ `components/index.ts` 생성 및 모든 컴포넌트 export
- ✅ `theme/index.tsx` 수정 - RdProvider, ColorSchemeProvider 등 export
- ✅ `src/index.ts` 수정 - @rendar/core에서 필요한 것만 re-export

**현재 구조:**
```
packages/emotion/src/
├── components/
│   ├── Accordion/
│   ├── Alert/
│   ├── Avatar/
│   ├── Badge/
│   ├── Breadcrumbs/
│   ├── Button/
│   ├── Card/
│   ├── Checkbox/
│   ├── Chip/
│   ├── Dialog/
│   ├── Divider/
│   ├── Drawer/
│   ├── Lists/
│   ├── Menu/
│   ├── Overlay/
│   ├── Radio/
│   ├── Spinner/
│   ├── Tab/
│   ├── Transition/
│   ├── View/
│   └── index.ts
├── theme/
│   ├── core/
│   ├── breakpoints.ts
│   ├── palette.ts
│   ├── shadows.ts
│   ├── typography.ts
│   └── index.tsx
├── contexts/
│   └── modal/
└── index.ts
```

### 3. @rendar/tailwind 패키지
- ✅ 기본 구조 완성
- ✅ Button 컴포넌트 구현
- ✅ cn 유틸리티 함수 구현
- ✅ Tailwind 설정 완료

**현재 구조:**
```
packages/tailwind/src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── index.ts
│   └── index.ts
├── styles/
│   └── globals.css
├── utils/
│   └── cn.ts
└── index.ts
```

## ⚠️ 남은 작업

### 1. @rendar/core 패키지
- [ ] 빌드 테스트 필요
- [ ] 타입 정의 파일 생성 확인

### 2. @rendar/emotion 패키지
- [ ] 컴포넌트 내부 import 경로 수정 필요
  - 기존: `import { useToggle } from '../../hooks/useToggle'`
  - 변경: `import { useToggle } from '@rendar/core'`
- [ ] theme 관련 타입들이 제대로 export 되는지 확인
- [ ] Storybook 설정 경로 수정 필요
- [ ] 빌드 테스트 필요

### 3. @rendar/tailwind 패키지
- [ ] 나머지 컴포넌트 구현 (Input, Checkbox, Radio, etc.)
- [ ] Storybook 설정 추가
- [ ] 빌드 테스트 필요

## 🔧 즉시 해야 할 작업

### 1단계: 의존성 설치
```bash
pnpm install
```

### 2단계: emotion 패키지 import 경로 수정
emotion 패키지의 모든 컴포넌트에서 공통 훅/유틸리티를 사용하는 경우:
```typescript
// 변경 전
import { useToggle } from '../../hooks/useToggle';
import { clamp } from '../../utils/clamp';

// 변경 후
import { useToggle, clamp } from '@rendar/core';
```

### 3단계: 빌드 테스트
```bash
# core 먼저 빌드
pnpm build:core

# emotion 빌드
pnpm build:emotion

# tailwind 빌드
pnpm build:tailwind

# 또는 전체 빌드
pnpm build
```

### 4단계: Storybook 테스트
```bash
pnpm storybook:emotion
```

## 📝 알려진 이슈

### 1. emotion 패키지의 컴포넌트 import 경로
- 대부분의 컴포넌트가 상대 경로로 hooks/utils를 import하고 있음
- 이를 `@rendar/core`로 변경해야 함
- 자동화 스크립트 필요할 수 있음

### 2. theme 관련 타입
- `RdComponentProps`, `RdTheme` 등이 emotion 패키지에만 있어야 함
- core 패키지에서는 제거됨

### 3. Storybook 설정
- emotion 패키지의 `.storybook/main.ts`에서 stories 경로 확인 필요
- `../src/components/**/*.stories.tsx` 형태로 수정 필요

## 🎯 다음 단계 우선순위

1. **즉시 (오늘)**
   - [ ] `pnpm install` 실행
   - [ ] emotion 패키지의 주요 컴포넌트 5개 정도 import 경로 수정
   - [ ] `pnpm build:core` 테스트
   - [ ] `pnpm build:emotion` 테스트

2. **단기 (1-2일)**
   - [ ] emotion 패키지의 모든 import 경로 수정
   - [ ] Storybook 설정 수정 및 테스트
   - [ ] tailwind 패키지에 Input, Checkbox 컴포넌트 추가

3. **중기 (1주)**
   - [ ] tailwind 패키지의 주요 컴포넌트 10개 구현
   - [ ] 각 패키지 README 업데이트
   - [ ] 테스트 추가

## 💡 자동화 스크립트 제안

emotion 패키지의 import 경로를 일괄 변경하는 스크립트:

```bash
# packages/emotion/src/components 내의 모든 .tsx, .ts 파일에서
# 상대 경로 import를 @rendar/core로 변경

find packages/emotion/src/components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e "s|from ['\"]../../hooks/\([^'\"]*\)['\"]|from '@rendar/core'|g" \
  -e "s|from ['\"]../../utils/\([^'\"]*\)['\"]|from '@rendar/core'|g" \
  -e "s|from ['\"]../../constants/\([^'\"]*\)['\"]|from '@rendar/core'|g" \
  -e "s|from ['\"]../../../hooks/\([^'\"]*\)['\"]|from '@rendar/core'|g" \
  -e "s|from ['\"]../../../utils/\([^'\"]*\)['\"]|from '@rendar/core'|g" \
  {} \;
```

---

**작성일**: 2025-11-08  
**체크 완료**: Phase 1 - 구조 검증

