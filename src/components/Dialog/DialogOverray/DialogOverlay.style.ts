import { createStyles } from "@/theme/core/tss/createStyles";
import { addAlpha } from "@/utils";

interface DialogOverlayStyleProps {
  hideBackdrop: boolean;
}

export default createStyles(
  (theme, { hideBackdrop }: DialogOverlayStyleProps, getRef) => {
    return {
      root: {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: hideBackdrop
          ? "none"
          : addAlpha(
              theme.palette.common.black,
              theme.opacity?.opacity54 as number
            ),
        inset: 0,
      },
    };
  }
);
