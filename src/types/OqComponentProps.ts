import type { CSSProperties } from "react";
import type { RdTheme } from "../theme/core/theme/types/RdTheme";
import type { CSSObject } from "../theme/core/tss/types";

export type Rd = CSSObject | ((theme: RdTheme) => CSSObject);

export type OverrideStyles<T extends string = never> =
  | Partial<Record<T, CSSObject>>
  | ((theme: RdTheme) => Partial<Record<T, CSSObject>>);

export interface RdComponentProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  rd?: Rd;
  overrideStyles?: OverrideStyles<T>;
}
