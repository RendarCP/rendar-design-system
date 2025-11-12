import * as CSS from "csstype";

export type CSSTssSpecials = {
  ref?: string;
};

export type CSSProperties = CSS.PropertiesFallback<number | string>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export type ArrayCSSInterpolation = Array<CSSInterpolation>;

export interface ComponentSelector {
  __emotion_styles: any;
}

export type Keyframes = {
  name: string;
  styles: string;
  anim: number;
  toString: () => string;
} & string;

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | SerializedStyles
  | CSSObject;

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export type CSSObject = CSSProperties &
  CSSPseudos &
  CSSTssSpecials & {
    [key: string]: CSSInterpolation | undefined;
  };
