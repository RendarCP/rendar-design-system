import { createStyles } from "@/theme/core/tss/createStyles";

export default createStyles((theme) => {
  return {
    root: {
      flex: "1 1 auto",
      margin: "6px 0",
      marginLeft: 10,
    },
    title: {
      ...theme.typography?.body1,
    },
    subtitle: {
      ...theme.typography?.caption,
      color: theme.palette.grey[500],
    },
  };
});
