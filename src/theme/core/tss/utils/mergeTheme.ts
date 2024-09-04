import { RdTheme } from "../../theme/types/RdTheme";

export function mergeTheme(
  currentTheme: RdTheme,
  themeOverride?: any
): RdTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  return Object.keys(currentTheme).reduce((acc: any, key: string) => {
    acc[key] =
      typeof themeOverride[key] === "object"
        ? { ...currentTheme[key], ...themeOverride[key] }
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as RdTheme);
}
