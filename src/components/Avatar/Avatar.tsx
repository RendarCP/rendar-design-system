import React, { ElementType, forwardRef } from "react";
import useStyles, { AvatarVariant } from "./Avatar.style";
import { useRdTheme } from "@/theme/core/RdProvider";
import { View } from "../View/View";
import { RdColorVariant } from "@/theme/core/theme/types/RdSize";

interface AvatarProps {
  children?: React.ReactNode;
  variant?: AvatarVariant;
  alt?: string;
  src?: string;
  color?: RdColorVariant;
  width?: number | string;
  height?: number | string;
  className?: any;
  overrideStyles?: any;
}

// useImageLoad 훅을 컴포넌트 외부로 분리
const useImageLoad = (src: string | undefined) => {
  const [loaded, setLoaded] = React.useState<"idle" | "loaded" | "error">(
    "idle"
  );

  React.useEffect(() => {
    if (!src) {
      setLoaded("idle");
      return;
    }

    setLoaded("idle");
    let active = true;

    const image = new Image();

    image.onload = () => {
      if (active) {
        setLoaded("loaded");
      }
    };

    image.onerror = () => {
      if (active) {
        setLoaded("error");
      }
    };

    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
};

export const Avatar = forwardRef(
  (
    {
      children,
      variant = "circular",
      alt,
      src,
      color = "primary",
      width = 40,
      height = 40,
      className,
      overrideStyles,
      ...props
    }: AvatarProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles(
      { color, width, height },
      { overrideStyles, name: "Avatar" }
    );

    // 항상 훅을 호출
    const imageLoadStatus = useImageLoad(src);
    const hasImageNotFailing = src && imageLoadStatus === "loaded";

    const renderChildren = () => {
      if (hasImageNotFailing) {
        return <img src={src} alt={alt} className={classes.image} />;
      }
      if (src && alt) {
        return alt[0];
      }
      return children;
    };

    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, classes[variant], className)}
        {...props}
      >
        {renderChildren()}
      </View>
    );
  }
);

Avatar.displayName = "Avatar";
