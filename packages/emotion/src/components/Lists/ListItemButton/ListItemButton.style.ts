import { createStyles } from "../../../theme/core/tss/createStyles";
import { addAlpha } from "@rendar/core";
import { RdSize } from "../../../theme/core/theme/types/RdSize";
import { RD_HEIGHT } from "../../../theme/core/theme/values";

interface ListItemButtonStylesProps {
  size: RdSize;
}

const sizes = {
  small: {
    height: RD_HEIGHT.small,
  },
  medium: {
    height: RD_HEIGHT.medium,
  },
  large: {
    height: RD_HEIGHT.large,
  },
};

export default createStyles(
  (theme, { size }: ListItemButtonStylesProps, getRef) => {
    return {
      root: {
        // ...sizes[size],
        appearance: "none",
        outline: "none",
        border: "none",
        boxSizing: "border-box",
        userSelect: "none",
        cursor: "pointer",
        display: "flex",
        textAlign: "left",
        alignItems: "center",
        flex: 1,
        background: "transparent",
        padding: "8px 16px",
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
        },
        "&:not(:disabled):active": {
          backgroundColor: addAlpha(
            theme.colorScheme === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            theme.opacity?.opacity38 as number
          ),
        },
      },
    };
  }
);
