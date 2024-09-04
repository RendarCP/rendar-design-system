import type { CSSProperties } from 'react';
import { responsiveQuery } from '../../tss/utils/responsive';

export interface IFontStyle {
  fontSize: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
}

export interface ITypo {
  fontFamily: string;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: IFontStyle;
  h2: IFontStyle;
  h3: IFontStyle;
  h4: IFontStyle;
  subtitle1: IFontStyle;
  subtitle2: IFontStyle;
  body1: IFontStyle;
  body2: IFontStyle;
  caption: IFontStyle;
}

const FONT_PRIMARY = `Noto Sans KR, Roboto, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif`;

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes() {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(32),
    },
  };
}

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    // lineHeight: 48,
    fontSize: responsiveQuery('up', 'small') ? pxToRem(40) : pxToRem(32),
  },
  h2: {
    fontWeight: 700,
    // lineHeight: 39,
    fontSize: responsiveQuery('up', 'small') ? pxToRem(30) : pxToRem(26.25),
  },
  h3: {
    fontWeight: 700,
    // lineHeight: 26,
    fontSize: responsiveQuery('up', 'small') ? pxToRem(24) : pxToRem(21),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: responsiveQuery('up', 'small') ? pxToRem(20) : pxToRem(17.5),
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
    fontWeight: 700,
    lineHeight: pxToRem(28),
    fontSize: responsiveQuery('up', 'small') ? pxToRem(16) : pxToRem(14),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: pxToRem(21.98),
    fontSize: responsiveQuery('up', 'small') ? pxToRem(14) : pxToRem(12.25),
  },
  body1: {
    lineHeight: pxToRem(24),
    fontSize: responsiveQuery('up', 'small') ? pxToRem(16) : pxToRem(14),
  },
  body2: {
    lineHeight: pxToRem(21),
    fontSize: responsiveQuery('up', 'small') ? pxToRem(14) : pxToRem(12.25),
  },
  caption: {
    lineHeight: pxToRem(19.92),
    fontSize: pxToRem(12),
  },
} as const;
