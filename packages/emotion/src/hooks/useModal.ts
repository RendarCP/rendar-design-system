import { useContext } from "react";
import { ModalDispatchContext } from "../contexts/modal/ModalProvider";

export function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (props: unknown) => {
    open(props);
  };

  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}

