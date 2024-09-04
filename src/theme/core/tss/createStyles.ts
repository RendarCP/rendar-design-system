import { useOqTheme, useCoThemeStyles } from "../RdProvider";

import type { CSS, CSSObject } from "./types";
import { fromEntries } from "./utils/fromEntries";
import { mergeClassNames } from "./utils/mergeClassNames";
import { useCss } from "./useCss";
import { RdTheme } from "../theme/types/RdTheme";

export interface UseStylesOptions<Key extends string> {
  // overrideStyles?: Partial<Record<Key, CSSObject>> | ((theme: CoTheme) => Partial<Record<Key, CSSObject>>);
  overrideStyles?: unknown;
  // overrideStyles?: Partial<Record<Key, CSSObject>> | ((theme: RdTheme) => Partial<Record<Key, CSSObject>>) | [key: string] : any;
  name: string;
}

export function createStyles<Key extends string = string, Params = unknown>(
  getCssObjectOrCssObject:
    | ((
        theme: RdTheme,
        params: Params,
        createRef: (refName: string) => string
      ) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject =
    typeof getCssObjectOrCssObject === "function"
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  // console.log('getCssObject', getCssObject);

  function useStyles(params?: Params, options?: UseStylesOptions<Key>) {
    // console.log('params@@@@@@@@@@@@@@@@@@@@@@@@@', params);
    // console.log('options$$$$$$$$$$$$$$$$$$$$$$', options);
    const theme = useOqTheme();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    const themeStyles = useCoThemeStyles()[options?.name!];

    const { css, cx } = useCss();

    let count = 0;

    function createRef(refName: string) {
      count += 1;
      return `rd-${refName || ""}`;
    }

    const cssObject = getCssObject(theme, params as Params, createRef);
    // console.log('cssObject', cssObject);

    const _overrideStyles =
      typeof options?.overrideStyles === "function"
        ? options?.overrideStyles(theme)
        : options?.overrideStyles || {};

    const _themeStyles =
      typeof themeStyles === "function"
        ? themeStyles(theme)
        : themeStyles || {};

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(
          css(cssObject[key as Key]),
          css(_themeStyles[key]),
          css(_overrideStyles[key])
        );
        return [key, mergedStyles];
      })
    ) as Record<Key, string>;

    // console.log('classes', classes);

    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      classes: mergeClassNames(cx, classes, options?.name!),
      cx,
      theme,
    };
  }

  return useStyles;
}
