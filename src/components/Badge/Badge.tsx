import React, { ElementType, forwardRef } from "react";
// import { useOqTheme } from '../../theme/core/OqProvider';
import { useRdTheme } from "@/theme/core/RdProvider";
import useStyles, { BadgeVariant } from "./Badge.style";
import { View } from "../View/View";
import { RdColorVariant } from "@/theme/core/theme/types/RdSize";

interface BadgeProps {
  children?: React.ReactNode;

  content?: string | number;

  color?: RdColorVariant;

  invisible?: boolean;

  variant?: BadgeVariant;

  max?: number | string;

  anchorOrigin?: any;
  overrideStyles?: any;
}

export const Badge = forwardRef(
  (
    {
      children,
      content,
      color = "primary",
      invisible = true,
      variant = "standard",
      max = 99,
      anchorOrigin = { vertical: "top", horizontal: "right" },
      overrideStyles,
    }: BadgeProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles(
      { color, variant, anchorOrigin },
      { overrideStyles, name: "Badge" }
    );

    const renderCount = (value: number | string) => {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(value as number) && (content as string) > max) {
        return `${max}+`;
      }
      return value;
    };

    console.log("anchorOrigin", anchorOrigin);

    return (
      <View<ElementType> ref={ref} className={classes.root}>
        {children}
        {invisible && (
          <View<ElementType> className={classes.badge}>
            {variant === "standard" && renderCount(content as number)}
          </View>
        )}
      </View>
    );
  }
);
