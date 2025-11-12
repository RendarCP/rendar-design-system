import React, { forwardRef } from "react";
import { useRdTheme } from "../../../theme/core/RdProvider";
import useStyles from "./AccordionSummary.style";
import { View } from "../../View/View";

interface AccordionSummaryProps {
  children?: React.ReactNode;

  value?: React.ReactNode | string;

  overrideStyles?: any;
}

export const AccordionSummary = forwardRef<
  React.ElementType,
  AccordionSummaryProps
>(
  (
    { children, value, overrideStyles, ...props }: AccordionSummaryProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "AccordionSummary" }
    );
    return (
      <View<React.ElementType>
        ref={ref}
        className={cx(classes.root)}
        {...props}
      >
        {children}
      </View>
    );
  }
);

AccordionSummary.displayName = "Accordion.Summary";
