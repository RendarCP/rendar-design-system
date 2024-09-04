import type { CSSProperties } from "react";
import type { CSSObject } from "../../tss/types";
import { RdTheme } from "./RdTheme";

export type Co = CSSObject | ((theme: RdTheme) => CSSObject);

export type OverrideStyles<T extends string = never> =
  | Partial<Record<T, CSSObject>>
  | ((theme: RdTheme) => Partial<Record<T, CSSObject>>);

export interface RdComponentProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  co?: Co;
  overrideStyles?: OverrideStyles<T>;
}
