import React, { forwardRef } from "react";

type ViewProps<T extends React.ElementType> = {
  component?: T;
} & React.ComponentPropsWithoutRef<T>;

export const View = forwardRef(
  <T extends React.ElementType = "div">(
    { component, ...props }: ViewProps<T>,
    ref: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const Element: React.ElementType = component || "div";
    return <Element ref={ref} {...props} />;
  }
);
