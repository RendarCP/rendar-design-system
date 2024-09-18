import React, { forwardRef } from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  component?: any;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      classes,
      color = 'primary',
      component,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      disableRipple = false,
      endIcon,
      fullWidth = false,
      href,
      size = 'medium',
      startIcon,
      sx,
      variant,
      ...other
    }: Props,
    ref,
  ) => {
    return (
      <MUIButton
        ref={ref}
        classes={classes}
        color={color}
        component={component}
        disabled={disabled}
        disableElevation={disableElevation}
        disableFocusRipple={disableFocusRipple}
        disableRipple={disableRipple}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        size={size}
        startIcon={startIcon}
        sx={sx}
        variant={variant}
        {...other}
      >
        {children}
      </MUIButton>
    );
  },
);

export default Button;
