import { createStyles } from "@/theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      position: "relative",
    },
    "private-input": {
      border: "1px solid blue",
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
      margin: 0,
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
  };
});
