import { useEffect, useRef } from 'react';
// import { useUpdateEffect } from '../useUpdateEffect';

interface UseFocusReturn {
  open: boolean;
  transitionDuration: number;
  shouldReturnFocus?: boolean;
}

/** Returns focus to last active element, used in Modal and Drawer */
export const useFocusReturn = ({ open, transitionDuration, shouldReturnFocus = true }: UseFocusReturn) => {
  const lastActiveElement = useRef<HTMLElement>();
  const returnFocus = () => {
    if (
      lastActiveElement.current &&
      'focus' in lastActiveElement.current &&
      typeof lastActiveElement.current.focus === 'function'
    ) {
      lastActiveElement.current?.focus();
    }
  };

  useEffect(() => {
    let timeout = -1;

    const clearFocusTimeout = (event: KeyboardEvent) => {
      if (event.code === 'Tab') {
        window.clearTimeout(timeout);
      }
    };

    document.addEventListener('keydown', clearFocusTimeout);

    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, transitionDuration + 10);
    }

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', clearFocusTimeout);
    };
  }, [open]);

  return returnFocus;
};
