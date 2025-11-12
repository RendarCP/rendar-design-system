import React, { ElementType, ReactElement, ReactNode, forwardRef } from "react";
// import CancelIcon from "@mui/icons-material/Cancel";
import { CSSObject } from "@emotion/react";
import useStyles, { ChipColor, ChipVariant, getSize } from "./Chip.style";
import { View } from "../View/View";
import { useRdTheme } from "../../theme/core/RdProvider";
import { RdSize } from "../../theme/core/theme/types/RdSize";

interface ChipProps {
  children?: ReactNode;

  variant?: ChipVariant;

  size?: RdSize;

  color?: ChipColor;

  label: string | number;

  icon?: ReactNode | Element;

  clickable?: boolean;

  onDelete?: () => void;

  avatar?: ReactNode | ReactElement;

  overrideStyles?: CSSObject;
}

export const Chip = forwardRef(
  (
    {
      children,
      variant = "filled",
      size = "small",
      color = "default",
      label,
      icon: iconProps,
      clickable = false,
      onDelete,
      avatar: avatarProps,
      overrideStyles,
    }: ChipProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles(
      { size, color, clickable },
      { overrideStyles, name: "Chip" }
    );
    let avatar = null;
    let icon = null;
    if (avatarProps && React.isValidElement(avatarProps)) {
      // eslint-disable-next-line no-param-reassign
      avatar = React.cloneElement(avatarProps, {
        width: getSize(size) - 8,
        height: getSize(size) - 8,
        overrideStyles: {
          root: {
            marginLeft: 5,
            fontSize: 14,
          },
        },
      });
    }

    if (iconProps && React.isValidElement(iconProps)) {
      icon = React.cloneElement(iconProps, {
        style: {
          marginLeft: 5,
        },
      });
    }

    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, classes[variant])}
      >
        {icon && icon}
        {avatar && avatar}
        <span className={classes.label}>{label}</span>
        {onDelete && (
          <div className={classes.deleteIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
            </svg>
          </div>
        )}
      </View>
    );
  }
);
