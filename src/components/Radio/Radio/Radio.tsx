import React, {
  useState,
  useCallback,
  forwardRef,
  ElementType,
  ChangeEvent,
  useContext,
} from "react";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import useStyles from "./Radio.style";
import { View } from "@/components/View/View";
import { Button } from "@/components/Button/Button";
import RadioContext from "../RadioContetxt";
import { RdColorVariant } from "@/theme/core/theme/types/RdSize";
import { useRdTheme } from "@/theme/core/RdProvider";

interface RadioProps {
  name?: string;
  label?: string;
  value?: string | number | any;
  color?: RdColorVariant;
  disabled?: boolean;
}

const RadioCheckIcon = () => {
  return (
    <svg
      style={{ width: 24, height: 24 }}
      focusable="false"
      aria-hidden="true"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  );
};

const RadioUnCheckIcon = () => {
  return (
    <svg
      style={{ width: 24, height: 24 }}
      focusable="false"
      aria-hidden="true"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  );
};

export const Radio = forwardRef(
  (
    { name, label, value, color = "primary", disabled = false }: RadioProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes } = useStyles({}, { name: "Radio" });
    const group = useContext(RadioContext);

    return (
      <View<ElementType> component="label" ref={ref} className={classes.root}>
        <Button
          variant="unstyled"
          color={color}
          overrideStyles={{
            root: {
              padding: 5,
              borderRadius: "100%",
              height: "auto",
              margin: 0,
              display: "flex",
              alignItems: "center",
              color: theme.palette[color].main,
            },
            unstyled: {
              color:
                value === group?.value
                  ? theme.palette[color].main
                  : theme.palette.grey[400],
            },
          }}
        >
          <div>
            {value === group?.value ? (
              // <RadioButtonCheckedIcon />
              <RadioCheckIcon />
            ) : (
              // <RadioButtonUncheckedIcon />
              <RadioUnCheckIcon />
            )}
          </div>
        </Button>
        <input
          type="radio"
          checked={
            group?.value !== undefined ? value === group?.value : undefined
          }
          value={value}
          disabled={disabled || group.disabled}
          name={name}
          id={value}
          className={classes["private-input"]}
          onChange={(e) => group.onChange && group.onChange(e)}
        />
        <div className={classes.label}>{label}</div>
      </View>
    );
  }
);
