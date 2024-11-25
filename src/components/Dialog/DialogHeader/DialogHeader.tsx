import React, { ElementType, ReactNode, forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./DialogHeader.style";
import { View } from "@/components/View/View";
import { Button } from "@/components/Button/Button";

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
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
            </svg>
          </div>
        </Button>
      </View>
    );
  }
);
