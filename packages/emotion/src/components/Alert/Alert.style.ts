import { createStyles } from "../../theme/core/tss/createStyles";
import { ColorSchema } from "../../theme/palette";
import { addAlpha } from "@rendar/core";

export type AlertVariant = "standard" | "outlined" | "filled";

interface AlertStyleProps {
  variant: AlertVariant;
  color: ColorSchema;
}

export default createStyles(
  (theme, { variant, color }: AlertStyleProps, getRef) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
        padding: "0.75rem 1rem",
        borderRadius: 4,
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        color: "inherit",
      },

      icon: {
        display: "flex",
        marginRight: 12,
        color:
          // eslint-disable-next-line no-nested-ternary
          variant === "filled"
            ? color === "error"
              ? theme.palette.common.white
              : theme.palette.common.black
            : theme.palette[color].main,
      },

      close: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "flex-start",
        color:
          variant === "filled"
            ? theme.palette.common.white
            : theme.palette[color].darker,
      },

      closeButton: {
        color:
          theme.colorScheme === "dark" ? theme.palette[color].light : "inherit",
        "&:not(:disabled):active": {
          background: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity12 as number
          ),
        },
        "&:not(:disabled):hover": {
          backgroundColor: addAlpha(
            theme.palette[color].main,
            theme.opacity?.opacity26 as number
          ),
        },
      },

      standard: {
        backgroundColor: addAlpha(
          theme.palette[color].main,
          theme.opacity?.opacity26 as number
        ),
        color:
          theme.colorScheme === "dark"
            ? theme.palette[color].light
            : theme.palette[color].darker,
      },

      outlined: {
        border: `2px solid ${theme.palette[color].light}`,
        color: theme.palette[color].main,
      },

      filled: {
        backgroundColor: theme.palette[color].main,
        color:
          color === "error"
            ? theme.palette.common.white
            : theme.palette.common.black,
      },
    };
  }
);
