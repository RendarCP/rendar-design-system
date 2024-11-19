import { ReactNode } from "react";
import { createStyles } from "@/theme/core/tss/createStyles";
import { addAlpha } from "@/utils";

interface CardHeaderStyleProps {
  avatar: ReactNode;
}

export default createStyles(
  (theme, { avatar }: CardHeaderStyleProps, getRef) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
        padding: 16,
      },

      avatar: {
        flex: "0 0 auto",
        marginRight: 16,
      },
      content: {
        flex: "1 1 auto",
      },
      title: {
        display: "block",
        margin: 0,
        fontSize: avatar ? 14 : 24,
        fontWeight: avatar ? 400 : 700,
      },
      subtitle: {
        display: "block",
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
        color: addAlpha(
          theme.colorScheme === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
          0.7
        ),
      },
      action: {
        flex: "0 0 auto",
        marginLeft: 16,
      },
    };
  }
);
