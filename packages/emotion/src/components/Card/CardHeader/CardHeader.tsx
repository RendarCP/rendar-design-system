import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./CardHeader.style";
import { View } from "../../View/View";

interface CardHeaderProps {
  children?: ReactNode;

  action?: ReactNode;

  avatar?: ReactNode;

  title?: string;

  subtitle?: string;
}

export const CardHeader = forwardRef(
  ({ children, action, avatar, title, subtitle }: CardHeaderProps, ref) => {
    const { classes, cx } = useStyles({ avatar }, { name: "CardHeader" });
    return (
      <View<ElementType> ref={ref} className={classes.root}>
        {avatar && <div className={classes.avatar}>{avatar}</div>}

        <div className={classes.content}>
          <span className={classes.title}>{title}</span>
          {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
        </div>

        {action && <div className={classes.action}>{action}</div>}
      </View>
    );
  }
);
