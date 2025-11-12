import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./Tab.style";
import { View } from "../../View/View";
import { RdColorVariant } from "../../../theme/core/theme/types/RdSize";
import { RdComponentProps } from "../../../theme/core/theme/types/RdComponentProps";

interface TabProps extends RdComponentProps {
  children: ReactNode;
  active?: boolean;
  onChange?: () => void;
  fullWidth?: boolean;
  color?: RdColorVariant;
  disabled?: boolean;
  value?: number | string;
  icon?: ReactNode;
}

export const Tab = forwardRef(
  (
    {
      children,
      active = false,
      onChange,
      fullWidth = false,
      color = "primary",
      disabled,
      value,
      icon,
      overrideStyles,
      ...props
    }: TabProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { active, fullWidth, color },
      { overrideStyles, name: "Tab" }
    );
    return (
      <View<ElementType>
        component="button"
        ref={ref}
        value={value}
        className={classes.root}
        onClick={onChange}
        disabled={disabled}
        {...props}
      >
        {icon && <div className={classes.icon}>{icon}</div>}
        {children}
      </View>
    );
  }
);
