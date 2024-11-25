import { createStyles } from "@/theme/core/tss/createStyles";

interface DialogStyleProps {
  openProps?: boolean;
  width: number | string;
  height: number | string;
}

export default createStyles(
  (theme, { openProps, width, height }: DialogStyleProps, getRef) => {
    return {
      root: {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        height: "100%",
        width: "100%",
        opacity: openProps ? 1 : 0,
        inset: 0,
        transition: "opacity 225ms ease",
        zIndex: openProps ? 0 : -1,
      },
      container: {
        zIndex: 0,
      },
      content: {
        width: width || 440,
        height: height || "auto",
        borderRadius: 4,
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
        backgroundColor:
          theme.colorScheme === "dark" ? "#2f3437" : theme.palette.common.white,
        color: "inherit",
      },
    };
  }
);
