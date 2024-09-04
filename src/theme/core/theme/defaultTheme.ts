import palette from "./values/palette";
import { RdThemeBase } from "./types/RdTheme";
import { opacity, typography } from "./values";
import breakpoints from "./values/breakpoints";

export const RD_DEFAULT_THEME: RdThemeBase = {
  colorScheme: "light",
  typography,
  palette: palette.light || {},
  opacity,
  breakpoints,
};
