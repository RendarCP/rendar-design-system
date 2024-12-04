import { createStyles } from "@/theme/core/tss/createStyles";

interface ListItemstyleProps {
  withPadding: boolean;
  padding: number | string;
}

export default createStyles(
  (theme, { withPadding, padding }: ListItemstyleProps, getRef) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "100%",
        textDecoration: "none",
        boxSizing: "border-box",
        padding: withPadding ? padding : 0,
      },
      endIcon: {
        width: 24,
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
    };
  }
);
