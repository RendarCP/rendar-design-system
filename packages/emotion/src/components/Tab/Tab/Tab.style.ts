import { RdColorVariant } from "../../../theme/core/theme/types/RdSize";
import { createStyles } from "../../../theme/core/tss/createStyles";

interface TabStyleProps {
  active: boolean;
  fullWidth: boolean;
  color: RdColorVariant;
}

export default createStyles(
  (theme, { active, fullWidth, color }: TabStyleProps, getRef) => {
    return {
      root: {
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        flex: fullWidth ? "1 1 auto" : "none",
        minHeight: 50,
        position: "relative",
        border: 0,
        margin: 0,
        padding: "12px 16px",
        outline: 0,
        overflow: "hidden",
        backgroundColor: "transparent",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: 14,
        textTransform: "uppercase",
        borderBottomWidth: active ? 2 : 0,
        borderBottomColor: active ? theme.palette[color].main : "none",
        borderBottomStyle: "solid",
        color: active ? theme.palette[color].main : theme.palette.grey[500],
        transition: "border-color 150ms ease 0s, color 150ms ease 0s",
      },

      icon: {},
    };
  }
);
