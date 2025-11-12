import { createStyles } from "../../../theme/core/tss/createStyles";

const getPosition = {
  start: {
    justifyContent: "flex-start",
  },
  center: {
    justifyContent: "center",
  },
  end: {
    justifyContent: "flex-end",
  },
};

export type OqDialogPosition = "start" | "center" | "end";

interface DialogActionsStyleProps {
  position: OqDialogPosition;
}

export default createStyles(
  (theme, { position }: DialogActionsStyleProps, getRef) => {
    return {
      root: {
        ...getPosition[position],
        display: "flex",
        alignItems: "center",
      },
    };
  }
);
