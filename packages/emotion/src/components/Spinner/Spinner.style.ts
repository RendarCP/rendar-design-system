/* eslint-disable no-nested-ternary */
// import { CoColor, CoPalette, CoSize } from '../../theme/core/theme';
import { createStyles } from "../../theme/core/tss/createStyles";
import { RdSize } from "../../theme/core/theme/types/RdSize";
import { RD_HEIGHT } from "../../theme/core/theme/values";

interface SpinnerStyles {
  size: "xsmall" | "small" | "medium" | "large" | "xlarge" | number;
  color?: string;
}

export default createStyles((theme, { size, color }: SpinnerStyles) => {
  const svgColor = color;
  // color === undefined
  //   ? theme.colorScheme === 'light'
  //     ? theme.palette.gray[8]
  //     : theme.colors.white
  //   : color in theme.palette
  //   ? theme.colorScheme === 'light'
  //     ? theme.palette[color][5]
  //     : theme.palette[color][3]
  //   : color in theme.colors
  //   ? theme.colors[color]
  //   : color;

  return {
    root: {
      position: "relative",
      display: "inline-block",
      width: size in RD_HEIGHT ? RD_HEIGHT[size as RdSize] : size,
      height: size in RD_HEIGHT ? RD_HEIGHT[size as RdSize] : size,
      verticalAlign: "middle",
    },

    inner: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",

      path: {
        stroke: svgColor,
      },
      circle: {
        fill: svgColor,
      },
    },
  };
});
