import React, {
  ElementType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useState,
} from "react";
import { CSSObject } from "@emotion/react";
import { View } from "../View/View";
import { DialogOverlay } from "./DialogOverray/DialogOverlay";
import useStyles from "./Dialog.style";
import { DialogHeader } from "./DialogHeader/DialogHeader";
// import DialogContent from '../DialogContent';
import { DialogContent } from "./DialogContent/DialogContent";
import { DialogActions } from "./DialogActions/DialogActions";

export type DialogProps = {
  children?: ReactNode;

  custom?: boolean;

  hideBackdrop?: boolean;

  open?: boolean;

  onClose?: () => void;

  title?: string;

  width?: number | string;

  height?: number | string;

  overlayProps?: unknown;

  overrideStyles?: CSSObject;
};

export const DialogComponent = forwardRef(
  (
    {
      children,
      custom = false,
      hideBackdrop = false,
      open: openProps,
      onClose,
      title,
      width = 440,
      height = "auto",
      overrideStyles,
      overlayProps,
    }: DialogProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { openProps, width, height },
      { overrideStyles, name: "Dialog" }
    );

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    const handleClick = () => {
      console.log("clciked");
    };

    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <View<ElementType> ref={ref} className={cx(classes.root)}>
        {openProps && (
          <>
            <DialogOverlay hideBackdrop={hideBackdrop} onClose={handleClose} />
            <div
              tabIndex={-1}
              className={classes.container}
              onClick={handleClick}
              aria-hidden="true"
            >
              {custom ? (
                children
              ) : (
                <div className={classes.content}>
                  {title && (
                    <DialogHeader open={openProps} onClose={handleClose}>
                      {title}
                    </DialogHeader>
                  )}
                  <DialogContent>{children}</DialogContent>
                </div>
              )}
            </div>
          </>
        )}
      </View>
    );
  }
);

interface IDialog
  extends ForwardRefExoticComponent<
    DialogProps & RefAttributes<HTMLDivElement>
  > {
  Overlay: typeof DialogOverlay;
  Content: typeof DialogContent;
  Header: typeof DialogHeader;
  Actions: typeof DialogActions;
}

export const Dialog = {
  ...DialogComponent,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Actions: DialogActions,
} as IDialog;
