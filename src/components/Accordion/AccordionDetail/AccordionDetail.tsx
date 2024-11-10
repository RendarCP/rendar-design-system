import React, { forwardRef } from "react";
import { useRdTheme } from "@/theme/core/RdProvider";
import useStyles from "./AccordionDetail.style";
import { View } from "@/components/View/View";

interface AccordionDetailProps {
  children?: React.ReactNode;

  overrideStyles?: any;
}

export const AccordionDetail = forwardRef<
  React.ElementType,
  AccordionDetailProps
>(({ children, overrideStyles, ...props }: AccordionDetailProps, ref) => {
  const theme = useRdTheme();
  const { classes, cx } = useStyles(
    {},
    { overrideStyles, name: "AccordionDetail" }
  );
  return (
    <View<React.ElementType> ref={ref} className={cx(classes.root)} {...props}>
      {children}
    </View>
  );
});

AccordionDetail.displayName = "Accordion.Detail";
