# 모노레포 테스트 가이드

## 🚀 1단계: 의존성 설치

```bash
# pnpm이 설치되어 있는지 확인
pnpm --version

# 없다면 설치
npm install -g pnpm

# 프로젝트 루트에서 의존성 설치
cd /Users/choseongweek/Documents/my-project/rendar-design-system
pnpm install
```

**예상 결과:**
- 모든 패키지의 `node_modules`가 설치됨
- workspace 링크가 생성됨 (@rendar/core → emotion, tailwind)

**확인 방법:**
```bash
# 각 패키지의 node_modules 확인
ls packages/core/node_modules
ls packages/emotion/node_modules
ls packages/tailwind/node_modules

# workspace 링크 확인
ls -la packages/emotion/node_modules/@rendar/core
ls -la packages/tailwind/node_modules/@rendar/core
```

---

## 🔨 2단계: 빌드 테스트

### 2-1. Core 패키지 빌드
```bash
pnpm build:core
```

**예상 결과:**
```
packages/core/dist/
├── index.es.js
├── index.es.js.map
├── index.cjs.js
├── index.cjs.js.map
└── index.d.ts
```

**확인 방법:**
```bash
ls -la packages/core/dist/
```

**예상 출력:**
- ✅ ES Module 번들 (index.es.js)
- ✅ CommonJS 번들 (index.cjs.js)
- ✅ TypeScript 타입 정의 (index.d.ts)
- ✅ 소스맵 파일들

### 2-2. Emotion 패키지 빌드
```bash
pnpm build:emotion
```

**예상 결과:**
```
packages/emotion/dist/
├── index.es.js
├── index.es.js.map
├── index.cjs.js
├── index.cjs.js.map
└── index.d.ts
```

**확인 방법:**
```bash
ls -la packages/emotion/dist/
```

### 2-3. Tailwind 패키지 빌드
```bash
pnpm build:tailwind
```

**예상 결과:**
```
packages/tailwind/dist/
├── index.es.js
├── index.es.js.map
├── index.cjs.js
├── index.cjs.js.map
├── index.d.ts
└── styles.css
```

**확인 방법:**
```bash
ls -la packages/tailwind/dist/
```

### 2-4. 전체 빌드 (Turbo 사용)
```bash
pnpm build
```

**예상 결과:**
- core → emotion, tailwind 순서로 빌드
- Turbo 캐시 활용
- 모든 패키지 빌드 성공

---

## 🧪 3단계: Import 테스트

### 3-1. Core 패키지 테스트
```bash
# Node.js REPL에서 테스트
node
```

```javascript
// REPL에서 실행
const core = require('./packages/core/dist/index.cjs.js');
console.log(Object.keys(core));
// 예상: ['useToggle', 'useControlled', 'clamp', 'addAlpha', ...]
```

### 3-2. Emotion 패키지 테스트
```javascript
const emotion = require('./packages/emotion/dist/index.cjs.js');
console.log(Object.keys(emotion));
// 예상: ['Button', 'Input', 'useToggle', 'RdProvider', ...]
```

### 3-3. TypeScript 타입 확인
```bash
# TypeScript 컴파일러로 타입 확인
npx tsc --noEmit packages/core/dist/index.d.ts
npx tsc --noEmit packages/emotion/dist/index.d.ts
npx tsc --noEmit packages/tailwind/dist/index.d.ts
```

**예상 결과:** 에러 없음

---

## 📚 4단계: Storybook 테스트

### 4-1. Emotion Storybook 실행
```bash
pnpm storybook:emotion
```

**예상 결과:**
- Storybook이 http://localhost:6006 에서 실행됨
- 모든 컴포넌트 스토리가 표시됨

**확인 사항:**
- [ ] Button 컴포넌트가 렌더링됨
- [ ] Input 컴포넌트가 렌더링됨
- [ ] 다른 컴포넌트들도 정상 작동
- [ ] 콘솔에 에러 없음

### 4-2. Tailwind Storybook 실행 (나중에)
```bash
pnpm storybook:tailwind
```

---

## 🔍 5단계: 에러 체크

### 5-1. 빌드 에러 확인
```bash
# 각 패키지 빌드 시 에러 로그 확인
pnpm build 2>&1 | tee build.log
```

**일반적인 에러:**

#### 에러 1: Module not found '@rendar/core'
```
Error: Cannot find module '@rendar/core'
```

**해결:**
```bash
# core 먼저 빌드
pnpm build:core
# 그 다음 emotion/tailwind 빌드
pnpm build:emotion
```

#### 에러 2: TypeScript 타입 에러
```
error TS2307: Cannot find module '@rendar/core' or its corresponding type declarations
```

**해결:**
```bash
# core의 타입 정의가 생성되었는지 확인
ls packages/core/dist/index.d.ts

# 없다면 vite-plugin-dts 설정 확인
```

#### 에러 3: Emotion import 에러
```
Error: Cannot find module '../../../hooks/useToggle'
```

**해결:**
- emotion 컴포넌트의 import 경로를 `@rendar/core`로 수정 필요

### 5-2. Lint 체크
```bash
pnpm lint
```

---

## ✅ 6단계: 통합 테스트

### 6-1. 테스트 앱 생성 (선택사항)
```bash
# 프로젝트 루트에서
mkdir test-app
cd test-app
npm init -y
npm install react react-dom
npm install ../packages/emotion
```

**test-app/index.js:**
```javascript
import { Button, useToggle } from '@rendar/emotion';

function App() {
  const [isOpen, toggle] = useToggle(false);
  
  return (
    <Button onClick={toggle}>
      {isOpen ? 'Open' : 'Closed'}
    </Button>
  );
}
```

### 6-2. 개발 모드 테스트
```bash
# 모든 패키지를 watch 모드로 실행
pnpm dev
```

**예상 결과:**
- 파일 변경 시 자동 리빌드
- Turbo가 변경된 패키지만 리빌드

---

## 📊 체크리스트

### 필수 확인 사항
- [ ] `pnpm install` 성공
- [ ] `pnpm build:core` 성공
- [ ] `pnpm build:emotion` 성공
- [ ] `pnpm build:tailwind` 성공
- [ ] `pnpm build` (전체) 성공
- [ ] core/dist/ 디렉토리에 파일들 생성됨
- [ ] emotion/dist/ 디렉토리에 파일들 생성됨
- [ ] tailwind/dist/ 디렉토리에 파일들 생성됨
- [ ] TypeScript 타입 정의 파일 생성됨
- [ ] Storybook 실행됨 (emotion)

### 선택 확인 사항
- [ ] `pnpm lint` 성공
- [ ] `pnpm dev` watch 모드 작동
- [ ] workspace 링크 정상 작동
- [ ] 테스트 앱에서 import 가능

---

## 🐛 문제 해결

### 문제 1: pnpm install 실패
```bash
# 캐시 클리어
pnpm store prune

# 다시 설치
rm -rf node_modules packages/*/node_modules
pnpm install
```

### 문제 2: 빌드 실패
```bash
# 각 패키지 개별 확인
cd packages/core
pnpm build

cd ../emotion
pnpm build

cd ../tailwind
pnpm build
```

### 문제 3: Turbo 캐시 문제
```bash
# Turbo 캐시 클리어
rm -rf .turbo
pnpm build
```

### 문제 4: TypeScript 에러
```bash
# tsconfig 확인
cat packages/core/tsconfig.json
cat packages/emotion/tsconfig.json
cat packages/tailwind/tsconfig.json
```

---

## 🎯 빠른 테스트 스크립트

전체 테스트를 한 번에 실행:

```bash
#!/bin/bash

echo "🧹 Cleaning..."
pnpm clean

echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Building core..."
pnpm build:core
if [ $? -ne 0 ]; then
  echo "❌ Core build failed"
  exit 1
fi

echo "🔨 Building emotion..."
pnpm build:emotion
if [ $? -ne 0 ]; then
  echo "❌ Emotion build failed"
  exit 1
fi

echo "🔨 Building tailwind..."
pnpm build:tailwind
if [ $? -ne 0 ]; then
  echo "❌ Tailwind build failed"
  exit 1
fi

echo "✅ All builds successful!"
echo ""
echo "📊 Build artifacts:"
ls -la packages/core/dist/
ls -la packages/emotion/dist/
ls -la packages/tailwind/dist/

echo ""
echo "🎉 Ready to test!"
echo "Run: pnpm storybook:emotion"
```

이 스크립트를 `test.sh`로 저장하고 실행:
```bash
chmod +x test.sh
./test.sh
```

---

**작성일**: 2025-11-08  
**목적**: 모노레포 구조 검증

