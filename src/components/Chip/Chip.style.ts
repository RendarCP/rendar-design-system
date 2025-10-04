import { RdColorVariant, RdSize } from "@/theme/core/theme/types/RdSize";
import { createStyles } from "../../theme/core/tss/createStyles";
import { addAlpha } from "../../utils";

export type ChipVariant = "filled" | "outlined";

export type ChipColor = RdColorVariant | "default";

interface ChipStyleProps {
  color: ChipColor;
  size: RdSize;
  clickable: boolean;
}

// eslint-disable-next-line consistent-return
export const getSize = (size: RdSize) => {
  // eslint-disable-next-line default-case
  switch (size) {
    case "small":
      return 24;
    case "medium":
      return 32;
    case "large":
      return 40;
  }
};

export default createStyles(
  (theme, { size, color, clickable }: ChipStyleProps, getRef) => {
    return {
      root: {
        height: getSize(size),
        display: "flex",
        cursor: clickable ? "pointer" : "",
        userSelect: "none",
        justifyContent: "center",
        alignItems: "center",
        // padding: '7px 10px',
        borderRadius: 100,
        // width: 'fit-content',
        // padding: '0px 5px',
        maxWidth: "100%",
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },

      label: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
        fontSize: 13,
      },

      deleteIcon: {
        width: 24,
        display: "flex",
        cursor: "pointer",
        marginRight: 5,
        color: addAlpha(
          theme.colorScheme === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
          theme.opacity?.opacity26 as number
        ),
        "&:hover": {
          color: addAlpha(
            theme.colorScheme === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            theme.opacity?.opacity12 as number
          ),
        },
      },

      filled: {
        backgroundColor:
          color === "default"
            ? theme.palette.grey[300]
            : theme.palette[color].main,
      },

      outlined: {
        border: "1px solid gray",
      },
    };
  }
);
