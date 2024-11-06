import React, { ReactElement, ReactText, ElementType, forwardRef } from "react";
import { View } from "../View/View";
// import { useRdTheme } from '../../theme/core/OqProvider';
import { useRdTheme } from "@/theme/core/RdProvider";
import useStyles from "./AvatarGroup.style";
import { Avatar } from "./Avatar";

interface AvatarGroupProps {
  children: React.ReactNode;

  max?: number;

  total?: number;
}

export const AvatarGroup = forwardRef(
  ({ children, max = 2, total, ...props }: AvatarGroupProps, ref) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles({}, { name: "AvatarGroup" });

    const avatars = React.Children.toArray(children)
      .filter((child: any) => child.type.displayName === "Avatar")
      .map((child: any, index: number) =>
        React.cloneElement(child, {
          // eslint-disable-next-line react/no-array-index-key
          key: index,
          className: cx(classes.child, child.props.className),
          style: {
            ...child.props.style,
            zIndex: index + 1,
          },
        })
      );

    const clampedMax = max < 2 ? 2 : max;
    const extraAvatars =
      avatars.length > clampedMax ? avatars.length - clampedMax : 0;
    const truncatedAvatars = total
      ? total - Math.min(avatars.length, clampedMax)
      : extraAvatars;

    return (
      <View<ElementType> ref={ref} className={classes.root} {...props}>
        {avatars.slice(0, avatars.length - extraAvatars)}
        {truncatedAvatars ? (
          <Avatar className={classes.child}>
            <View<ElementType>>+{truncatedAvatars}</View>
          </Avatar>
        ) : null}
      </View>
    );
  }
);
