import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./ListItemText.style";
import { View } from "@/components/View/View";

interface ListItemTextProps {
  title: string | number;
  subtitle?: string | number;
}

export const ListItemText = forwardRef(
  ({ title, subtitle }: ListItemTextProps, ref) => {
    const { classes } = useStyles({}, { name: "ListItemText" });
    return (
      <View<ElementType> ref={ref} className={classes.root}>
        <span className={classes.title}>{title}</span>
        <p className={classes.subtitle}>{subtitle}</p>
      </View>
    );
  }
);
