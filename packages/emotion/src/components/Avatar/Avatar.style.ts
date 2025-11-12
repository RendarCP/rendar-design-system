import { RdColorVariant } from "../../theme/core/theme/types/RdSize";
import { createStyles } from "../../theme/core/tss/createStyles";

export type AvatarVariant = "circular" | "rounded" | "square";

interface AvatarStyleProps {
  color: RdColorVariant;
  width: number | string;
  height: number | string;
}

export default createStyles(
  (theme, { color, width, height }: AvatarStyleProps, getRef) => {
    return {
      circular: {
        borderRadius: "50%",
      },
      rounded: {
        borderRadius: 4,
      },
      square: {
        borderRadius: 0,
      },
      root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        flexShrink: 0,
        width,
        height,
        borderRadius: "50%",
        overflow: "hidden",
        lineHeight: 1,
        fontSize: 18,
        userSelect: "none",
        backgroundColor: color
          ? theme.palette[color].main
          : theme.palette.grey[500],
        textTransform: "uppercase",
      },
      children: {},
      image: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
        color: "transparent",
        textIndent: "10000px",
      },
    };
  }
);
