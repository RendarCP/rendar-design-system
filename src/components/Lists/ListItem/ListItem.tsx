import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./ListItem.style";
import { View } from "@/components/View/View";
import { RdComponentProps } from "@/types/OqComponentProps";

interface ListItemProps extends RdComponentProps<never> {
  children: ReactNode;
  endIcon?: ReactNode;
  withPadding?: boolean;
  padding?: number | string;
}

export const ListItem = forwardRef(
  (
    {
      children,
      endIcon,
      withPadding = false,
      padding = "8px 16px",
      ...props
    }: ListItemProps,
    ref
  ) => {
    const { classes } = useStyles(
      { withPadding, padding },
      { name: "ListItem" }
    );
    return (
      <View<ElementType> component="li" ref={ref} className={classes.root}>
        {children}
        <div className={classes.endIcon}>{endIcon}</div>
      </View>
    );
  }
);
