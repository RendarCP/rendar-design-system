import { createStyles } from "@/theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      display: "flex",
      overflow: "hidden",
      minHeight: 50,
      backgroundColor:
        theme.colorScheme === "dark" ? "#121212" : theme.palette.common.white,
    },
  };
});
