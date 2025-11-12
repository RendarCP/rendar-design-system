import {
  ElementType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
} from "react";
import useStyles from "./Lists.style";
import { View } from "../View/View";
import { ListItem } from "./ListItem/ListItem";
import { ListItemButton } from "./ListItemButton/ListItemButton";
import { ListItemText } from "./ListItemText/ListItemText";

interface ListProps {
  children: ReactNode;

  component?: ElementType;
}

export const ListComponent = forwardRef(
  ({ children, component }: ListProps, ref) => {
    const { classes, cx } = useStyles({}, { name: "List" });
    return (
      <View<ElementType>
        component={component || "ul"}
        ref={ref}
        className={classes.root}
      >
        {children}
      </View>
    );
  }
);

interface IList
  extends ForwardRefExoticComponent<ListProps & RefAttributes<HTMLDivElement>> {
  Item: typeof ListItem;
  Button: typeof ListItemButton;
  Text: typeof ListItemText;
}

export const Lists = {
  ...ListComponent,
  Item: ListItem,
  Button: ListItemButton,
  Text: ListItemText,
} as IList;
