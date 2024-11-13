import React, { ElementType, forwardRef } from "react";
import { View } from "../View/View";
import useStyles from "./Breadcrumbs.style";
import { RdSize } from "@/theme/core/theme/types/RdSize";

interface BreadcrumbsProps {
  children: React.ReactNode;
  // breadcrumbs 구분선
  separator?: string;
  // 간격 사이즈
  spacing?: RdSize;
  // style overrride
  overrideStyles?: any;

  className?: any;
}

export const Breadcrumbs = forwardRef(
  (
    {
      children,
      separator = "/",
      spacing = "medium",
      overrideStyles,
      className,
      ...props
    }: BreadcrumbsProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { spacing },
      { overrideStyles, name: "Breadcrumbs" }
    );

    const items = React.Children.toArray(children).reduce(
      (acc: any[], child: any, index, array) => {
        acc.push(React.cloneElement(child));

        if (index !== array.length - 1) {
          acc.push(<div className={classes.separator}>{separator}</div>);
        }

        return acc;
      },
      []
    );

    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, className)}
        {...props}
      >
        {items}
      </View>
    );
  }
);
