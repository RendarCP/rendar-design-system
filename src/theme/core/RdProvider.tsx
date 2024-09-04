import React, { createContext, useContext } from "react";
import type { Options as EmotionCacheOptions } from "@emotion/cache";
import type { CSSObject } from "./tss/types/cssObject";
// import palette from '../palette';
import palette from "./theme/values/palette";
import { NormalizeCSS } from "./NormalizeCSS";
import { Global } from "./tss/Global";
import { RdTheme, RdThemeBase } from "./theme/types/RdTheme";
import { RD_DEFAULT_THEME } from "./theme/defaultTheme";
import { mergeTheme } from "./tss/utils/mergeTheme";

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: any) => Record<string, CSSObject>)
>;

interface RdThemeContextType {
  theme: RdTheme;
  styles: ProviderStyles;
  emotionOptions: EmotionCacheOptions | undefined;
}

const RdThemeContext = createContext<RdThemeContextType>({
  theme: RD_DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: "rd", prepend: true },
});

export function useOqTheme() {
  return useContext(RdThemeContext)?.theme || RD_DEFAULT_THEME;
}

export function useCoThemeStyles() {
  return useContext(RdThemeContext)?.styles || {};
}

export function useOqEmotionOptions(): EmotionCacheOptions {
  return (
    useContext(RdThemeContext)?.emotionOptions || { key: "rd", prepend: true }
  );
}

interface RdProviderProps {
  theme: RdThemeBase;
  styles?: ProviderStyles;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  children: React.ReactNode;
}

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          fontFamily: theme.typography.fontFamily,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.palette.common.black
              : theme.palette.common.white,
          color:
            theme.colorScheme === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
          fontSize: theme.typography.body2.fontSize,
        } as any,
      })}
    />
  );
}

export function RdProvider({
  theme = RD_DEFAULT_THEME,
  styles = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  children,
}: RdProviderProps) {
  return (
    <RdThemeContext.Provider
      value={React.useMemo(
        () => ({
          theme: mergeTheme(
            {
              ...RD_DEFAULT_THEME,
              palette:
                theme.colorScheme === "dark" ? palette.dark : palette.light,
            },
            theme
          ),
          styles,
          emotionOptions,
        }),
        [theme]
      )}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </RdThemeContext.Provider>
  );
}
