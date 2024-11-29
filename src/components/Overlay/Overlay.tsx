import React, { forwardRef, ElementType, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import useStyles from './Overlay.style';
import { View } from '../View/View';
import { TOpacity } from '../../theme/core/theme/values';

interface OverlayProps {
  /** overlay 투명도 값 설정 */
  opacity?: TOpacity | number;

  /** overlay 색상 값 설정 */
  color?: string;

  /** overlay z-index 값 설정 */
  zIndex?: number;

  onClose?: () => void;

  className?: CSSObject | any;
}

export const Overlay = forwardRef(({ opacity = 1, color, zIndex, onClose, className, ...props }: OverlayProps, ref) => {
  const { classes, cx } = useStyles({ opacity }, { name: 'Overlay' });
  return <View<ElementType> onClick={onClose} className={cx(classes.root, className)} {...props} />;
});
