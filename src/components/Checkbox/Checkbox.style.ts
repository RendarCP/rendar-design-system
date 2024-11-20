import { RdColorVariant } from "@/theme/core/theme/types/RdSize";
import { createStyles } from "../../theme/core/tss/createStyles";
import { addAlpha } from "../../utils";

interface CheckboxStyleProps {
  color: RdColorVariant;
  disabled: boolean;
}

export default createStyles(
  (theme, { color, disabled }: CheckboxStyleProps, getRef) => {
    const refDisabled = getRef("disabled");
    return {
      disabled: {
        ref: refDisabled,
        pointerEvents: "none",
        cursor: "default",
      },
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        position: "relative",
        boxSizing: "border-box",
        cursor: "pointer",
        border: 0,
        margin: 0,
        padding: 8,
        borderRadius: "50%",
        color: disabled
          ? addAlpha(
              theme.colorScheme === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
              theme.opacity?.opacity26 as number
            )
          : theme.palette[color].main,
      },
      input: {
        cursor: "inherit",
        position: "absolute",
        opacity: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1,
      },
      label: {
        color: theme.palette.text.primary,
      },
    };
  }
);
