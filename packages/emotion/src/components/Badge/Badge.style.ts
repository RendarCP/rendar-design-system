import { RdColorVariant } from "../../theme/core/theme/types/RdSize";
import { RdTheme } from "../../theme/core/theme/types/RdTheme";
import { createStyles } from "../../theme/core/tss/createStyles";

export type BadgeVariant = "standard" | "dot";

type PositionVariant = { vertical: string; horizontal: string };

type TPositionKey = "top-right" | "top-left" | "bottom-right" | "bottom-left";
interface BadgeStyleProps {
  color: RdColorVariant;
  variant: BadgeVariant;
  // anchorOrigin: any;
  anchorOrigin: PositionVariant;
}

const getVariantStyle = (theme: RdTheme) => ({
  standard: {
    minWidth: 20,
    height: 20,
    padding: "0 6px",
  },
  dot: {
    minWidth: 8,
    height: 8,
    padding: 0,
  },
});

const getBadgePositionStyle = (theme: RdTheme, variant: BadgeVariant) => ({
  "top-right": {
    top: variant === "standard" ? -5 : 0,
    right: variant === "standard" ? -5 : 0,
    transform: "scale(1) translate(50%, -50%)",
  },
  "top-left": {
    top: variant === "standard" ? -5 : 0,
    left: variant === "standard" ? -5 : 0,
    transform: "scale(1) translate(-50%, -50%)",
  },
  "bottom-right": {
    bottom: variant === "standard" ? -5 : 0,
    right: variant === "standard" ? -5 : 0,
    transform: "scale(1) translate(50%, 50%)",
  },
  "bottom-left": {
    bottom: variant === "standard" ? -5 : 0,
    left: variant === "standard" ? -5 : 0,
    transform: "scale(1) translate(-50%, 50%)",
  },
});

export default createStyles(
  (theme, { color, variant, anchorOrigin }: BadgeStyleProps, ref) => {
    const originPosition = `${anchorOrigin.vertical}-${anchorOrigin.horizontal}`;
    return {
      root: {
        position: "relative",
        display: "inline-flex",
        verticalAlign: "middle",
        flexShrink: 0,
      },
      badge: {
        ...getVariantStyle(theme)[variant],
        ...getBadgePositionStyle(theme, variant)[
          originPosition as TPositionKey
        ],
        display: "flex",
        lineHeight: 1,
        flexFlow: "row wrap",
        alignItems: "center",
        boxSizing: "border-box",
        borderRadius: 10,
        backgroundColor: theme.palette[color].main,
        position: "absolute",
        transformOrigin: "100% 0%",
        fontSize: 14,
        transition: "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    };
  }
);
