import { createStyles } from "@/theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      position: "relative",
      width: "100%",
      padding: "8px 0",
      listStyle: "none",
      backgroundColor:
        theme.colorScheme === "dark" ? "#121212" : theme.palette.common.white,
    },
  };
});
