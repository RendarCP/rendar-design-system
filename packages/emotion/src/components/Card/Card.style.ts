import { createStyles } from "../../theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      // border: '1px solid red',
      display: "block",
      borderRadius: 4,
      overflow: "hidden",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      textDecoration: "none",
      color: "inherit",
      backgroundColor:
        theme.colorScheme === "dark" ? "#121212" : theme.palette.common.white,
    },
  };
});
