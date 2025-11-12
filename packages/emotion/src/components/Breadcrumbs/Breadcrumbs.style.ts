import { RdSize } from "../../theme/core/theme/types/RdSize";
import { createStyles } from "../../theme/core/tss/createStyles";
import { RdTheme } from "../../theme/core/theme/types/RdTheme";

interface BreadcrumbsStylesProps {
  spacing: RdSize;
}

const getFontStyles = (theme: RdTheme) => ({
  small: {
    fontWeight: 400,
    fontSize: 15,
  },

  medium: {
    fontWeight: 400,
    fontSize: 16,
  },

  large: {
    fontWeight: 400,
    fontSize: 17,
  },
});

const getSpacing = () => ({
  small: {
    marginLeft: 4,
    marginRight: 4,
  },
  medium: {
    marginLeft: 8,
    marginRight: 8,
  },
  large: {
    marginLeft: 12,
    marginRight: 12,
  },
});

export default createStyles((theme, { spacing }: BreadcrumbsStylesProps) => {
  return {
    root: {
      ...getFontStyles(theme)[spacing],
      display: "flex",
      alignItems: "center",
      color:
        theme.colorScheme === "dark"
          ? theme.palette.grey[200]
          : theme.palette.grey[500],
    },

    separator: {
      ...getSpacing()[spacing],
    },
  };
});
