import React, { useState, useMemo, ReactNode } from 'react';
//
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
//
import palette from './palette';
import breakpoints from './breakpoints';
import typography from './typography';
import shadows from './shadows';
import componentsOverride from './overrides';

type Props = {
  children: ReactNode;
  isDark?: boolean;
};

ThemeProvider.defaultProps = {
  isDark: false,
};

export default function ThemeProvider({ children, isDark }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isDark ? palette.dark : palette.light,
      breakpoints,
      typography,
      spacing: 4,
      shape: { borderRadius: 8 },
      shadows: isDark ? shadows.dark : shadows.light,
    }),
    [isDark],
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
// export {};
