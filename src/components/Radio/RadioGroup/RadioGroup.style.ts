import { createStyles } from "@/theme/core/tss/createStyles";
import { addAlpha } from "@/utils";

export default createStyles((theme) => {
  return {
    root: {},
    label: {
      color:
        theme.colorScheme === "dark"
          ? addAlpha(
              theme.palette.common.white,
              theme.opacity?.opacity54 as number
            )
          : addAlpha(
              theme.palette.common.black,
              theme.opacity?.opacity26 as number
            ),
      fontSize: 16,
      fontWeight: 400,
    },
  };
});
