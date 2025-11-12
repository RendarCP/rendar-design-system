import { createStyles } from "../../../theme/core/tss/createStyles";
import { addAlpha } from "@rendar/core";

export default createStyles((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
      cursor: "pointer",
      userSelect: "none",
      textDecoration: "none",
      outline: "none",
      border: "none",
      padding: "6px 16px",
      backgroundColor:
        theme.colorScheme === "dark" ? "#121212" : theme.palette.common.white,
      textAlign: "left",
      color:
        theme.colorScheme === "dark"
          ? theme.palette.common.white
          : theme.palette.common.black,
      "&:not(:disabled):hover": {
        backgroundColor: addAlpha(
          theme.colorScheme === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
          theme.opacity?.opacity12 as number
        ),
      },
      "&:not(:disabled):active": {
        backgroundColor: addAlpha(
          theme.colorScheme === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
          theme.opacity?.opacity38 as number
        ),
      },
    },

    icon: {
      display: "flex",
      alignItems: "center",
      marginRight: 8,
    },

    left: {
      display: "flex",
      alignItems: "center",
    },

    right: {},
  };
});
