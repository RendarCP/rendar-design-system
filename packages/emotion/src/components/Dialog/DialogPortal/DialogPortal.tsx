import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Dialog, DialogProps } from '../Dialog';

interface DialogPortalProps extends DialogProps {
  children: ReactNode;
}

/**
 * @see {@link https://react.dev/reference/react-dom/createPortal#usage}
 */

export const DialogPortal = ({ children, ...props }: DialogPortalProps) => {
  return createPortal(<Dialog {...props}>{children}</Dialog>, document.body);
};
