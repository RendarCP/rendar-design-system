import { CSSProperties } from "react";
import {
  ITypo,
  IChartPalette,
  IPaletteColor,
  IPaletteGrey,
  IColorBase,
  TOpacity,
  IbreakPoints,
} from "../values";

export interface IPaletteBase {
  [key: string]:
    | IPaletteColor
    | { [key: string]: string }
    | IPaletteGrey
    | IColorBase
    | IChartPalette;
  background: {
    default: string;
    neutral: string;
    paper: string;
  };
  chart: IChartPalette;
  common: {
    black: string;
    white: string;
  };
  primary: IPaletteColor;
  // secondary?: IPaletteColor;
  info: IPaletteColor;
  success: IPaletteColor;
  warning: IPaletteColor;
  error: IPaletteColor;
  grey: IPaletteGrey;
  other: {
    backdropOverlay: string;
    divider: string;
  };
  gradients: IColorBase;
  text: {
    disabled: string;
    primary: string;
    secondary: string;
  };
}

export interface RdTheme {
  [key: string]: any;
  colorScheme: "light" | "dark";
  typography?: ITypo;
  palette?: IPaletteBase | any;
  spacing?: unknown;
  opacity?: Record<TOpacity, number>;
  breakpoints?: IbreakPoints;
  radius?: unknown;
}

export type RdThemeBase = RdTheme;
