import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles, { OqDialogPosition } from "./DialogActions.style";
import { View } from "../../View/View";

interface DialogActionsProps {
  children?: ReactNode;

  position?: OqDialogPosition;
}

export const DialogActions = forwardRef(
  ({ children, position = "end" }: DialogActionsProps, ref) => {
    const { classes, cx } = useStyles({ position }, { name: "DialogActions" });

    return (
      <View<ElementType> ref={ref} className={classes.root}>
        {children}
      </View>
    );
  }
);

DialogActions.displayName = "DialogActions";
