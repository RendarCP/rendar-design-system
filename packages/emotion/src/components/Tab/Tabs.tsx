import React, {
  useState,
  ElementType,
  forwardRef,
  ReactNode,
  useCallback,
  ChangeEvent,
} from "react";
import useStyles from "./Tabs.style";
import { View } from "../View/View";
import { RdColorVariant } from "../../theme/core/theme/types/RdSize";
import { RdComponentProps } from "../../theme/core/theme/types/RdComponentProps";

interface TabsProps extends RdComponentProps {
  children: ReactNode;
  color?: RdColorVariant;
  fullWidth?: boolean;
  value?: number | string;
  onChange?: (
    event: ChangeEvent<HTMLButtonElement>,
    index: number | string
  ) => void;
}

export const Tabs = forwardRef(
  (
    {
      children,
      color,
      fullWidth = false,
      value,
      onChange,
      overrideStyles,
      ...props
    }: TabsProps,
    ref
  ) => {
    const { classes, cx } = useStyles({}, { overrideStyles, name: "Tabs" });
    const [activeTab, setActiveTab] = useState<number | string>(value || 0);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLButtonElement>, index: number | string) => {
        setActiveTab(index);
        if (onChange) {
          onChange(event, index);
        }
      },
      [onChange, activeTab]
    );

    const tabs = React.Children.toArray(children).map(
      (child: any, index: number) =>
        React.cloneElement(child, {
          // eslint-disable-next-line react/no-array-index-key
          key: index,
          active: activeTab === index,
          value: child.props.value ? child.props.value : index,
          onChange: (e: ChangeEvent<HTMLButtonElement>) =>
            handleChange(e, index),
          fullWidth,
          color,
        })
    );

    return (
      <View<ElementType> ref={ref} className={classes.root} {...props}>
        {tabs}
      </View>
    );
  }
);
