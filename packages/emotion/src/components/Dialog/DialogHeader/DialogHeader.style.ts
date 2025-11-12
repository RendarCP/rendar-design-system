import { createStyles } from "../../../theme/core/tss/createStyles";

interface DialogHeaderProps {
  open: boolean;
}

export default createStyles((theme, { open }: DialogHeaderProps, getRef) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 24px",
      opacity: open ? 1 : 0,
      transition: "opacity 300ms ease",
    },
    "header-title": {
      fontSize: 20,
      fontWeight: 700,
    },
  };
});
