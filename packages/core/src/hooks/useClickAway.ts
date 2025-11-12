import { useEffect, useRef, MutableRefObject } from "react";
import { useCallbackRef } from "./useCallbackRef";

const events = ["mousedown", "touchstart"];

export const useClickAway = <T extends HTMLElement, E extends Event = Event>(
  handler: (event: E) => void
): MutableRefObject<T | undefined> => {
  const ref = useRef<T>();
  const savedCallback = useCallbackRef(handler);

  useEffect(() => {
    const handleEvent = (e: any) => {
      const { current: element } = ref;
      // eslint-disable-next-line no-unused-expressions
      element && !element.contains(e.target) && savedCallback(e);
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      // eslint-disable-next-line no-restricted-syntax
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref.current]);

  return ref;
};
