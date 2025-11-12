// import { BorderTop } from "@mui/icons-material";
import { createStyles } from "../../theme/core/tss/createStyles";
import { addAlpha } from "@rendar/core";
import { RdSize } from "../../theme/core/theme/types/RdSize";

interface DividerStyleProps {
  withChildren: boolean;
  size: RdSize | number;
}

const getSizeValue = (size: RdSize | number) => {
  switch (size) {
    case "small": {
      return 1;
    }
    case "medium": {
      return 3;
    }
    case "large": {
      return 5;
    }
    default:
      return size;
  }
};

export default createStyles(
  (theme, { withChildren, size }: DividerStyleProps, getRef) => {
    // const withChildren = getRef('withChildren');

    const DivderColor =
      theme.colorScheme === "dark"
        ? addAlpha(
            theme.palette.common.white,
            theme.opacity?.opacity12 as number
          )
        : addAlpha(
            theme.palette.common.black,
            theme.opacity?.opacity12 as number
          );
    return {
      withChildren: {
        borderTopWidth: "0 !important",
      },
      withChildrenVertical: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      },
      root: {
        border: 0,
        borderColor: DivderColor,
        borderStyle: "solid",
      },
      left: {
        "&::before": {
          flex: 1,
        },
        "&::after": {
          flex: 10,
        },
      },
      right: {
        "&::before": {
          flex: 10,
        },
        "&::after": {
          flex: 1,
        },
      },
      center: {},
      wrapper: {
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          // width: '100%',
          alignSelf: "center",
          borderTop: `${getSizeValue(size)}px solid ${DivderColor}`,
          flex: 1,
          marginRight: 8,
        },
        "&::after": {
          content: '""',
          // width: '100%',
          alignSelf: "center",
          borderTop: `${getSizeValue(size)}px solid ${DivderColor}`,
          flex: 1,
          marginLeft: 8,
        },
      },
      horizontal: {
        borderTopWidth: getSizeValue(size),
        margin: "8px 0",
        alignSelf: "stretch",
      },
      vertical: {
        display: "inline-block",
        verticalAlign: "middle",
        height: "auto",
        alignSelf: "stretch",
        borderLeftWidth: getSizeValue(size),
        margin: "0 8px",
      },
    };
  }
);
