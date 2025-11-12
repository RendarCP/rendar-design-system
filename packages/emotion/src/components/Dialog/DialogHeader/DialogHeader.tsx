import React, { ElementType, ReactNode, forwardRef } from "react";
import { CloseIcon } from "../../icons";
import useStyles from "./DialogHeader.style";
import { View } from "../../View/View";
import { Button } from "../../Button/Button";

interface DialogHeaderProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const DialogHeader = forwardRef(
  ({ children, open, onClose }: DialogHeaderProps, ref) => {
    const { classes, cx } = useStyles({ open }, { name: "DialogHeader" });
    return (
      <View<ElementType> ref={ref} className={classes.root}>
        <div className={classes["header-title"]}>{children}</div>
        <Button
          onClick={onClose}
          variant="unstyled"
          size="small"
          overrideStyles={{
            unstyled: {
              color: "rgb(158,158,158)",
            },
          }}
        >
          <div>
            <svg
              style={{ width: 24 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </div>
        </Button>
      </View>
    );
  }
);
