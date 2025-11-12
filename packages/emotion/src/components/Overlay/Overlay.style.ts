import { TOpacity } from "../../theme/core/theme/values";
import { createStyles } from "../../theme/core/tss/createStyles";
import { addAlpha } from "@rendar/core";

interface OverlayStyleProps {
  opacity: TOpacity | number;
}

export default createStyles((theme, { opacity }: OverlayStyleProps, getRef) => {
  return {
    root: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: opacity || 1,
      transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      backgroundColor: addAlpha(
        theme.palette.common.black,
        theme.opacity?.opacity54 as number
      ),
      inset: 0,
    },
  };
});
