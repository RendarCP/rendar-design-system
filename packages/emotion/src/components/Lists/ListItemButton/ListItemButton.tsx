import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./ListItemButton.style";
import { View } from "../../View/View";
import { RdSize } from "../../../theme/core/theme/types/RdSize";

interface ListItemButtonProps {
  children: ReactNode;

  size?: RdSize;
}

export const ListItemButton = forwardRef(
  ({ children, size = "medium" }: ListItemButtonProps, ref) => {
    const { classes } = useStyles({ size }, { name: "ListItemButton" });
    return (
      <View<ElementType> component="button" ref={ref} className={classes.root}>
        {children}
      </View>
    );
  }
);
