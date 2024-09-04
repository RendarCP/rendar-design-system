import { RdSize } from "../../theme/types/RdSize";
import breakpoints, { IbreakPoints } from "../../theme/values/breakpoints";
import { OQ_HEIGHT } from "../../theme/values";

type TQuery = {
  up: string;
  down: string;
};

export const largerThan = (size: RdSize) => {
  return `@media (min-width: ${breakpoints[size] + 1}px)`;
};

export const smallerThan = (size: RdSize) => {
  return `@media (max-width: ${breakpoints[size]}px)`;
};

// eslint-disable-next-line consistent-return
export const responsiveQuery = (
  type: TQuery | string,
  size: number | string
) => {
  if (type === "up") {
    return matchMedia(
      `(min-width: ${size in breakpoints ? breakpoints[size] : size}px)`
    ).matches;
  }
  if (type === "down") {
    return matchMedia(
      `(max-width: ${size in breakpoints ? breakpoints[size] : size}px)`
    ).matches;
  }
};
