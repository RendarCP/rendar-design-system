import React, { useContext } from 'react'
import { ModalContext, ModalDispatchContext } from './ModalProvider'
// import OqModal from '../../components/OqModal';
import { Dialog } from '../../components/Dialog/Dialog';

export default function Modals() {
  const {open, onClose, children, custom} = useContext(ModalContext);
  const { close } = useContext(ModalDispatchContext);

  return <Dialog open={open} onClose={() => close()} custom={Boolean(custom)}>
    {children}
  </Dialog>
}
