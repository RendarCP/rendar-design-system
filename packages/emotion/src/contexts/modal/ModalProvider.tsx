import { useReducer, createContext, useMemo, ReactNode } from 'react';

type ModalContextType = {
  children: ReactNode | null;
  open: boolean;
  onClose: () => void;
  content: ReactNode | null;
  custom: ReactNode | null;
  props: unknown
};



const initialstate = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
  content: null,
  custom: null,
  children: null,
  props: null,
};

const modalReducer = (state: any, action: any) => {
  switch(action.type){
    case 'OPEN_MODAL':
      return {
        ...state,
        open: true,
        children: action.children,
        custom: action.custom,
        ...action.props
      };
    case 'CLOSE_MODAL':
      return {
        open: false,
        children: null,
        custom: null,
        props: null,
      };
    default:
      return state;
  }
}


export const ModalContext = createContext<ModalContextType>(initialstate);

export const ModalDispatchContext = createContext<any>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  open: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(modalReducer, initialstate);

  const setValue = useMemo(
    () => ({
      open: (props: unknown) => {
        dispatch({ type: 'OPEN_MODAL', props });
      },
      close: () => {
        dispatch({ type: 'CLOSE_MODAL' });
      },
    }),
    [state],
  );

  return (
    <ModalDispatchContext.Provider value={setValue}>
      <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
    </ModalDispatchContext.Provider>
  );
}
