# @rendar/emotion

Rendar Design System의 Emotion 기반 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install @rendar/emotion
# or
pnpm add @rendar/emotion
# or
yarn add @rendar/emotion
```

## 사용법

```tsx
import { RdProvider, Button, Input } from "@rendar/emotion";

function App() {
  return (
    <RdProvider>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </RdProvider>
  );
}
```

## 컴포넌트

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

## 테마 커스터마이징

```tsx
import { RdProvider, createTheme } from "@rendar/emotion";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return <RdProvider theme={customTheme}>{/* Your app */}</RdProvider>;
}
```

## 라이선스

MIT
