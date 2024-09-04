import type { CSSProperties } from 'react';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
}

export interface ITypo {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: HeadingStyle;
  h2: HeadingStyle;
  h3: HeadingStyle;
  h4: HeadingStyle;
  subtitle1: HeadingStyle;
  subtitle2: HeadingStyle;
  body1: HeadingStyle;
  body2: HeadingStyle;
  caption: HeadingStyle;
}

const FONT_PRIMARY = `Noto Sans KR, Roboto, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif`;

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    // lineHeight: 48,
    fontSize: pxToRem(40),
  },
  h2: {
    fontWeight: 700,
    // lineHeight: 39,
    fontSize: pxToRem(30),
  },
  h3: {
    fontWeight: 700,
    // lineHeight: 26,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  // h5: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(18),
  // },
  // h6: {
  //   fontWeight: 700,
  //   lineHeight: 28 / 18,
  //   fontSize: pxToRem(17),
  // },
  subtitle1: {
    fontWeight: 600,
    // lineHeight: 28,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 700,
    // lineHeight: 21.98,
    fontSize: pxToRem(14),
  },
  body1: {
    // lineHeight: 24,
    fontSize: pxToRem(16),
  },
  body2: {
    // lineHeight: 21,
    fontSize: pxToRem(14),
  },
  caption: {
    // lineHeight: 19.92,
    fontSize: pxToRem(12),
  },
} as const;

export default typography;
