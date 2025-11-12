import type { CSSInterpolation } from './cssObject';

export interface CSS {
  (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
  (...args: CSSInterpolation[]): string;
}
