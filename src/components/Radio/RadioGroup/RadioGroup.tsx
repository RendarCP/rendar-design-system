import React, {
  ElementType,
  ReactNode,
  forwardRef,
  ChangeEvent,
  useMemo,
} from "react";
import useStyles from "./RadioGroup.style";
import { View } from "@/components/View/View";
import RadioContext from "../RadioContetxt";

interface RadioGroupProps {
  label?: string;

  children: ReactNode;

  name?: string;

  value?: string;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = forwardRef(
  ({ label, children, value, onChange, ...props }: RadioGroupProps, ref) => {
    const { classes } = useStyles({}, { name: "RadioGroup" });

    const contextValue = useMemo(
      () => ({ value, onChange, ...props }),
      [value, onChange]
    );

    return (
      <View<ElementType> component="fieldset" className={classes.root}>
        <div className={classes.label}>{label}</div>
        <RadioContext.Provider value={contextValue}>
          {children}
        </RadioContext.Provider>
      </View>
    );
  }
);
