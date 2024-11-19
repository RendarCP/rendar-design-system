import React, { ElementType, ReactNode, forwardRef } from "react";
import { View } from "@/components/View/View";
import useStyles from "./CardContent.style";

interface CardContentProps {
  children?: ReactNode;

  padding?: number | string;

  full?: boolean;
}

export const CardContent = forwardRef(
  ({ children, padding = 16, full = false }: CardContentProps, ref) => {
    const { classes, cx } = useStyles(
      { full, padding },
      { name: "CardContent" }
    );
    return (
      <View<ElementType> ref={ref} className={classes.root}>
        {children}
      </View>
    );
  }
);
