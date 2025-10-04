import { useContext, useState } from "react";
import { ModalDispatchContext } from "../contexts/modal/ModalProvider";

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (props: unknown) => {
    open(props);
  };

  const closeModal = () => {
    close();
  };
  return { openModal, closeModal };
}
