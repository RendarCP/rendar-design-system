import { createStyles } from "../../../theme/core/tss/createStyles";

interface CardContentStyleProps {
  full: boolean;
  padding: number | string;
}

export default createStyles(
  (theme, { full, padding }: CardContentStyleProps, getRef) => {
    return {
      root: {
        padding: full ? 0 : padding,
        "& > img": {
          width: "100%",
          objectFit: "cover",
        },
      },
    };
  }
);
