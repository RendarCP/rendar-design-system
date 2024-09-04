import React, { useContext } from 'react'
import { ModalContext, ModalDispatchContext } from './ModalProvider'
import OqModal from '../../components/OqModal';

export default function Modals() {
  const {open, onClose, children, ...childrenprops} = useContext(ModalContext);
  const { close } = useContext(ModalDispatchContext);

  return <OqModal open={open} onClose={() => close()} {...childrenprops}>
    {children}
  </OqModal>
}
