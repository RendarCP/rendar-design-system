import React, { forwardRef } from "react";
import { RdSize } from "../../theme/core/theme/types/RdSize";
import { ColorSchema } from "../../theme/palette";
import { View } from "../View/View";
import { useOqTheme } from "../../theme/core/RdProvider";
import useStyles, { ButtonVariant } from "./Button.style";
import { Spinner } from "../Spinner/Spinner";
import { RD_HEIGHT } from "../../theme/core/theme/values";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../theme/core/tss/types/Polymorphic";

interface ButtonProps {
  // 버튼 사이즈 정의 'small' | 'medium' | 'large'
  size?: RdSize;
  // 버튼 컬러 정의 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  color?: ColorSchema;
  // 버튼 타입 정의 'contained' | 'outlined' | 'text' | 'unstyled'
  variant?: ButtonVariant;
  // fullSize
  fullWidth?: boolean;
  // disalbed 여부
  disabled?: boolean;
  // leftIcon 정의
  leftIcon?: React.ReactNode;
  // rightIcon 정의
  rightIcon?: React.ReactNode;
  // loading 여부
  loading?: boolean;
  // spinner스타일 props
  spinnerProps?: any;
  // 버튼 children 정의
  children: React.ReactNode;
  // component 변경 -> elementType만 가능
  component?: React.ElementType;

  className?: any;

  overrideStyles?: any;
}

export type TButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, ButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: TButtonProps<C>
) => React.ReactElement;

export const Button = forwardRef(
  <C extends React.ElementType = "button">(
    {
      component,
      color: _color = "primary",
      size = "medium",
      variant = "text",
      fullWidth = false,
      disabled = false,
      loading,
      className,
      leftIcon,
      rightIcon,
      overrideStyles,
      children,
      spinnerProps,
      ...props
    }: TButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useOqTheme();
    const color = _color || theme.palette[_color].main;
    const { classes, cx } = useStyles(
      {
        color: _color,
        size,
        fullWidth,
      },
      { overrideStyles, name: `Button-${size}` }
    );

    const spinner = (
      <Spinner
        color={
          variant === "contained"
            ? theme.palette.common.white
            : theme.palette[color].main
        }
        size={RD_HEIGHT[size] / 2}
        {...spinnerProps}
      />
    );

    return (
      <View<React.ElementType>
        component={component || "button"}
        ref={ref}
        className={cx(
          { [classes.loading]: loading },
          classes.root,
          classes[variant],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        <div className={classes.inner}>
          {leftIcon && (
            <span className={cx(classes.icon, classes.leftIcon)}>
              {leftIcon}
            </span>
          )}

          <span className={classes.label}>{children}</span>

          {rightIcon && (
            <span className={cx(classes.icon, classes.rightIcon)}>
              {rightIcon}
            </span>
          )}
        </div>
        {loading && <div className={classes.spinnerWrapper}>{spinner}</div>}
      </View>
    );
  }
);
