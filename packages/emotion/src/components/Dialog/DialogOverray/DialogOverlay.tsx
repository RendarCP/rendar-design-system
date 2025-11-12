import React, { ElementType, forwardRef } from "react";
import { View } from "../../View/View";
import useStyles from "./DialogOverlay.style";

interface DialogOverlayProps {
  onClose?: () => void;

  hideBackdrop?: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const DialogOverlay = forwardRef(
  ({ onClose, hideBackdrop = false, ...props }: DialogOverlayProps, ref) => {
    const { classes, cx } = useStyles(
      { hideBackdrop },
      { name: "DialogOverlay" }
    );
    return (
      <View<ElementType>
        ref={ref}
        className={classes.root}
        onClick={onClose}
        {...props}
      />
    );
  }
);
