import React, { ElementType, ReactNode, forwardRef } from "react";
import { View } from "../View/View";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types";
import useStyles from "./Card.style";
import { CardHeader } from "./CardHeader/CardHeader";
import { CardContent } from "./CardContent/CardContent";

export type CardProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  _CardProps
>;

type CardComponent = <C extends ElementType = "div">(
  props: CardProps<C>
) =>
  | (React.ReactElement & {
      displayName?: string;
    })
  | null;

interface _CardProps {
  children: ReactNode;
}

const CardComponent: CardComponent = forwardRef(
  <C extends ElementType = "div">(
    { children, component, className, overrideStyles, ...props }: CardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({}, { overrideStyles, name: "Card" });
    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, className)}
        component={component}
        {...props}
      >
        {children}
      </View>
    );
  }
);

interface ICard
  extends React.ForwardRefExoticComponent<
    CardProps<ElementType> & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof CardHeader;
  Content: typeof CardContent;
}

export const Card = {
  ...CardComponent,
  Header: CardHeader,
  Content: CardContent,
} as ICard;
