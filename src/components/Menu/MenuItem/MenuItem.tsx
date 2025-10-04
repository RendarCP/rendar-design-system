import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./MenuItem.style";
import { View } from "@/components/View/View";
import { RdComponentProps } from "@/types/OqComponentProps";

interface MenuItemProps extends RdComponentProps<never> {
  children: ReactNode;

  icon?: ReactNode;

  rightSection?: ReactNode | string | number;
}

export const MenuItem = forwardRef(
  (
    {
      children,
      overrideStyles,
      className,
      icon,
      rightSection,
      ...props
    }: MenuItemProps,
    ref
  ) => {
    const { classes, cx } = useStyles({}, { overrideStyles, name: "MenuItem" });
    return (
      <View<ElementType>
        component="button"
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        <div className={classes.left}>
          {icon && <div className={classes.icon}>{icon}</div>}
          {children}
        </div>
        {rightSection && <div className={classes.right}>{rightSection}</div>}
      </View>
    );
  }
);
