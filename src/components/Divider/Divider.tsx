import React, { ElementType, ReactNode, forwardRef } from "react";
import useStyles from "./Divider.style";
import { View } from "../View/View";
import { RdSize } from "@/theme/core/theme/types/RdSize";

interface DividerProps {
  children?: ReactNode;

  orientation?: string;
  // component?: ReactNode;

  labelPosition?: "left" | "center" | "right";

  size?: RdSize | number;
}

export const Divider = forwardRef(
  (
    {
      children,
      orientation = "horizontal",
      labelPosition = "center",
      size = "small",
    }: DividerProps,
    ref
  ) => {
    const vertical = orientation === "vertical";
    const horizontal = !vertical;
    const withChildren = !!children;
    const withChildrenVertical = !!children && vertical;
    const { classes, cx } = useStyles(
      { withChildren, size },
      { name: "Divider" }
    );
    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, {
          [classes.vertical]: vertical,
          [classes.horizontal]: horizontal,
          [classes.withChildren]: withChildren,
          [classes.withChildrenVertical]: withChildrenVertical,
        })}
      >
        {children && (
          <div className={cx(classes.wrapper, classes[labelPosition])}>
            {children}
          </div>
        )}
      </View>
    );
  }
);
