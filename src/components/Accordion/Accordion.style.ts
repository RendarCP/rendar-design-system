import { createStyles } from "@/theme/core/tss/createStyles";
import { addAlpha } from "@/utils";

export type AccordionVariant = "standard" | "outlined" | "filled";

interface AccordionStyleProps {
  variant?: AccordionVariant;
  expanded?: boolean;
}

export default createStyles(
  (theme, { expanded }: AccordionStyleProps, getRef) => {
    return {
      root: {
        backgroundColor: expanded ? theme.palette.grey[200] : "transparent",
        color:
          theme.colorScheme === "light"
            ? theme.palette.common.black
            : theme.palette.common.white,
        margin: 0,
        width: "100%",
        transition: "margin 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      },

      "Summary-wrapper": {
        color: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        cursor: "pointer",
        boxSizing: "border-box",
        textDecoration: "none",
        appearance: "none",
        WebkitAppearance: "none",
        outline: "none",
        border: "none",
        background: "none",
        width: "100%",
        minHeight: 48,
        transition: "min-height 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        // '&:not(:disabled):hover': {
        //   backgroundColor: theme.palette.grey[200],
        //   borderRadius: 4,
        // },
        "&:disabled": {
          cursor: "not-allowed",
          backgroundColor: theme.palette.grey[400],
          color: addAlpha(
            theme.colorScheme === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            theme.opacity?.opacity12 as number
          ),
        },
      },

      "Detail-wrapper": {
        position: "relative",
        overflow: "hidden",
        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "height", // 성능 최적화
        // '&::before': {
        //   content: '""',
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   height: 1,
        //   opacity: expanded ? 1 : 0,
        //   backgroundColor: theme.palette.grey[300],
        //   transition: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        // },
      },

      "Detail-inner": {
        padding: "20px",
        visibility: expanded ? "visible" : "hidden",
        transform: expanded ? "translateY(0)" : "translateY(-10%)",
        opacity: expanded ? 1 : 0,
        transition: `
        visibility 300ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)
      `,
      },

      standard: {
        borderBottom: `1px solid ${theme.palette.grey[500]}`,
        backgroundColor:
          theme.colorScheme === "dark" ? "#121212" : "transparent",
        "&:before": {
          display: "none",
        },
      },

      outlined: {
        border: `1px solid ${theme.colorScheme === "dark" ? theme.palette.common.white : theme.palette.common.black}`,
        backgroundColor:
          theme.colorScheme === "dark" ? "#121212" : "transparent",
        borderRadius: 0,
        "&:first-of-type": {
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        },
        "&:last-of-type": {
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        },
        "&:not(:first-of-type)": {
          borderTop: 0,
        },
      },

      filled: {
        backgroundColor:
          theme.colorScheme === "dark" ? "#121212" : "transparent",
      },

      icon: {
        display: "flex",
        color: "inherit",
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    };
  }
);
