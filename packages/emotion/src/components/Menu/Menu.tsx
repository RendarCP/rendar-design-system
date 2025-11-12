import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./Menu.style";
import { View } from "../View/View";
import { RdComponentProps } from "../../theme/core/theme/types/RdComponentProps";

interface MenuProps extends RdComponentProps<any> {
  children: ReactNode;
}

export const Menu = forwardRef(
  ({ children, overrideStyles, className, ...props }: MenuProps, ref) => {
    const { classes, cx } = useStyles({}, { overrideStyles, name: "Menu" });
    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);
