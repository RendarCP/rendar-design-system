import React from "react";
import { Global as EmotionGlobal, css, CSSObject } from "@emotion/react";
import { useOqTheme } from "../RdProvider";
// import type { CoTheme } from './types/cssObject';

interface GlobalStylesProps {
  // styles(theme: CoTheme): CSSObject;
  styles(theme: any): CSSObject;
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useOqTheme();
  return <EmotionGlobal styles={css(styles(theme))} />;
}
