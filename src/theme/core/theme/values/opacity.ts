export type TOpacity =
  | 'opacity0'
  | 'opacity6'
  | 'opacity12'
  | 'opacity26'
  | 'opacity38'
  | 'opacity54'
  | 'opacity87'
  | 'opacity1';

export const opacity: Record<TOpacity, number> = {
  opacity0: 0.0,
  opacity6: 0.06,
  opacity12: 0.12,
  opacity26: 0.26,
  opacity38: 0.38,
  opacity54: 0.54,
  opacity87: 0.87,
  opacity1: 1,
};
