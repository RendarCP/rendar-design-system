import { RdTheme } from "../../theme/core/theme/types/RdTheme";
import { createStyles } from "../../theme/core/tss/createStyles";

type TDrawerSize = {
  [key: string]: number | string;
};

export const sizes: TDrawerSize = {
  small: 240,
  medium: 320,
  large: 360,
  full: "100%",
};

export type DrawerPosition = "top" | "bottom" | "left" | "right";

interface DrawerStyles {
  position: DrawerPosition;
  size: number | string;
}

interface GetPositionStyles {
  position: DrawerPosition;
  size: number | string;
  theme: RdTheme;
}

const getPositionStyles = ({
  position,
  size,
  theme,
}: GetPositionStyles): Partial<Record<keyof React.CSSProperties, any>> => {
  switch (position) {
    case "top":
      return { top: 0, left: 0, right: 0, height: sizes[size] };

    case "bottom":
      return { bottom: 0, left: 0, right: 0, height: sizes[size] };

    case "right":
      return { bottom: 0, top: 0, right: 0, width: sizes[size] };

    case "left":
      return { bottom: 0, top: 0, left: 0, width: sizes[size] };

    default:
      return {};
  }
};

export default createStyles(
  (theme, { position, size }: DrawerStyles, getRef) => {
    const noOverlay = getRef("noOverlay");
    return {
      closeButton: {},
      overlay: {},

      noOverlay: {
        ref: noOverlay,
      },

      root: {
        [`&:not(.${noOverlay})`]: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      },

      drawer: {
        ...getPositionStyles({ position, size, theme }),
        maxWidth: "100%",
        maxHeight: "100vh",
        position: "fixed",
        outline: 0,
        background: theme.palette.common.white,
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      },

      title: {
        marginRight: 20,
        fontSize: 16,
        textOverflow: "ellipsis",
        display: "block",
        wordBreak: "break-word",
      },

      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        padding: 20,
      },
    };
  }
);
