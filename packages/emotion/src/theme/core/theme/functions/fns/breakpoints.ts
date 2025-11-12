// import { CoSize, CoThemeBase } from '../../types';
import { size } from './size';

export const largerThan = (theme: any) => {
  return (breakpoint: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
};

export const smallerThan = (theme: any) => {
  return (breakpoint: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
};
