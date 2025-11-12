import { createStyles } from "../../theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: "8px 0",
      backgroundColor:
        theme.colorScheme === "dark" ? "#121212" : theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRadius: 4,
      overflow: "hidden",
    },
  };
});
