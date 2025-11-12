export interface IbreakPoints {
  [key: string]: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

const breakpoints: IbreakPoints = {
  xsmall: 0,
  small: 600,
  medium: 900,
  large: 1200,
  xlarge: 1475,
};

export default breakpoints;
