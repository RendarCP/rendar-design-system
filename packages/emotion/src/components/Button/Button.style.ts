// import { createStyles, CoSize, CoTheme, CoPalette, defaultFontStyles } from '@co-design/styles';
import { createStyles } from "../../theme/core/tss/createStyles";
import { addAlpha } from "@rendar/core";
import { RdTheme } from "../../theme/core/theme/types/RdTheme";
import { RD_HEIGHT } from "../../theme/core/theme/values";
import { RdSize, RdVariant } from "../../theme/core/theme/types/RdSize";
import { ColorSchema } from "../../theme/palette";

export type ButtonVariant = RdVariant;

interface ButtonStylesProps {
  color?: ColorSchema;
  size: RdSize;
  fullWidth: boolean;
}

const sizes = {
  small: {
    height: RD_HEIGHT.small,
    padding: "0 8px",
  },
  medium: {
    height: RD_HEIGHT.medium,
    padding: "0 16px",
  },
  large: {
    height: RD_HEIGHT.large,
    padding: "0 24px",
  },
};

const getFontStyles = (theme: RdTheme) => ({
  small: {
    fontWeight: 600,
    fontSize: 13,
  },

  medium: {
    fontWeight: 600,
    fontSize: 14,
  },

  large: {
    fontWeight: 600,
    fontSize: 15,
  },
});

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto",
});

export default createStyles(
  (theme, { color: _color, size, fullWidth }: ButtonStylesProps, getRef) => {
    const loading = getRef("loading");
    const inner = getRef("inner");
    const spinner = getRef("spinner");
    const color = _color || "primary";

    return {
      loading: {
        ref: loading,
        pointerEvents: "none",

        [`.${inner}`]: {
          opacity: 0,
        },

        [`.${spinner}`]: {
          display: "flex",
        },
      },

      contained: {
        backgroundColor: theme.palette[color].main,
        color:
          theme.colorScheme === "light"
            ? theme.palette.common.white
            : theme.palette.common.black,

        "&:not(:disabled):hover": {
          backgroundColor: theme.palette[color]?.main,
        },

        "&:not(:disabled):active": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity54 as number
          ),
        },

        "&:not(:disabled):focus-visible": {},

        [`&:disabled:not(.${loading})`]: {
          backgroundColor: theme.palette.grey[200],
          color: addAlpha(
            theme.palette.common.black,
            theme.opacity?.opacity26 as number
          ),
        },
      },

      outlined: {
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette[color].main}`,
        color: theme.palette[color]?.main,

        "&:not(:disabled):hover": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity26 as number
          ),
        },

        "&:not(:disabled):active": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity38 as number
          ),
        },

        "&:not(:disabled):focus-visible": {},

        [`&:disabled:not(.${loading})`]: {
          color: addAlpha(
            theme.palette.common.black,
            theme.opacity?.opacity26 as number
          ),
          border: `1px solid ${addAlpha(theme.palette.common.black, theme.opacity?.opacity12 as number)}`,
        },
      },

      unstyled: {
        // padding: 0,
        backgroundColor: "transparent",
        color:
          theme.colorScheme === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,

        "&:not(:disabled):hover": {
          backgroundColor: addAlpha(
            theme.colorScheme === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            theme.opacity?.opacity12 as number
          ),
          "&:not(:disabled):active": {
            backgroundColor: addAlpha(
              theme.colorScheme === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
              theme.opacity?.opacity38 as number
            ),
          },
        },

        // '&:not(:disabled):focus-visible': {
        //   outline: `1px solid ${theme.palette[color].main}`,
        // },

        // [`&:disabled:not(.${loading})`]: {
        //   color: addAlpha(theme.palette.common.black, theme.opacity?.opacity26 as number),
        // },
      },

      text: {
        backgroundColor: "transparent",
        color: theme.palette[color]?.main,

        "&:not(:disabled):hover": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity26 as number
          ),
        },

        "&:not(:disabled):focus-visible": {
          outline: `1px solid ${theme.palette[color].main}`,
        },

        "&:not(:disabled):active": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity38 as number
          ),
        },

        [`&:disabled:not(.${loading})`]: {
          color: addAlpha(
            theme.palette.common.black,
            theme.opacity?.opacity26 as number
          ),
        },
      },

      root: {
        ...sizes[size],
        ...getFontStyles(theme)[size],
        ...getWidthStyles(fullWidth),
        background: theme.palette[color]?.main,
        color: "white",
        borderRadius: 8,
        position: "relative",
        lineHeight: 1,
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        boxSizing: "border-box",
        textDecoration: "none",
        cursor: "pointer",
        appearance: "none",
        WebkitAppearance: "none",
        outline: "none",
        border: "none",
        textTransform: "uppercase",

        "&:not(:disabled):active": {
          // background: addAlpha(theme.palette[color].main, theme.opacity?.opacity12 as number),
          backgroundColor: addAlpha(
            theme.palette.common.black,
            theme.opacity?.opacity12 as number
          ),
        },

        "&:disabled": {
          cursor: "not-allowed",
        },
      },

      icon: {
        display: "flex",
        alignItems: "center",
      },

      leftIcon: {
        marginRight: 10,
      },

      rightIcon: {
        marginLeft: 10,
      },

      inner: {
        ref: inner,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflow: "visible",
      },

      label: {
        whiteSpace: "nowrap",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      },

      spinnerWrapper: {
        ref: spinner,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
      },
    };
  }
);
