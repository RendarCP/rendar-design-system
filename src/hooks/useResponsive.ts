import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type Query = 'up' | 'down' | 'between' | 'only' | 'not';
type Key = Breakpoint | number;
type Start = Breakpoint | number;
type End = Breakpoint | number;

// eslint-disable-next-line consistent-return
export default function useResponsive(query: Query, key?: Key, start?: Start, end?: End) {
  const theme = useTheme();

  // 현재 key값으로 넘어온 화면보다 클시 [key , infinity]
  const resUp = useMediaQuery(theme.breakpoints.up(key as Key));

  // 현재 key값으로 넘어온 화면보다 작을시  [infinity, key]
  const resDown = useMediaQuery(theme.breakpoints.down(key as Key));

  // 현재 key값과 지정된 화면으로 맞춤 
  const resOnly = useMediaQuery(theme.breakpoints.only(key as Breakpoint));

  // start 보다 크고, end보다 작은 화면 
  const resBetWeen = useMediaQuery(theme.breakpoints.between(start as Start, end as End));

  if (query === 'up') {
    return resUp;
  }

  if (query === 'down') {
    return resDown;
  }

  if (query === 'between') {
    return resBetWeen;
  }

  if (query === 'only') {
    return resOnly;
  }
}
