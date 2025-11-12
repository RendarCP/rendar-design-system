import { toRgba } from "./toRgba";

// rga값에서 alpha값을 추가한다.
export const addAlpha = (hex: string, alpha: number) => {
  const { r, g, b } = toRgba(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
