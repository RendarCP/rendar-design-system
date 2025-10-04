import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./DialogContent.style";
import { View } from "@/components/View/View";

interface DialogContentProps {
  children?: ReactNode;
}

export const DialogContent = forwardRef(
  ({ children }: DialogContentProps, ref) => {
    const { classes, cx } = useStyles({}, { name: "DialogContent" });
    return (
      <View<ElementType> ref={ref} className={classes.root}>
        {children}
      </View>
    );
  }
);
