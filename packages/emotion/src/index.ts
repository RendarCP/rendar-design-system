// Re-export from core (hooks, utils, constants)
export {
  // Hooks
  useCallbackRef,
  useClickAway,
  useControlled,
  useFocusReturn,
  useFocusTrap,
  useId,
  useIsomorphicEffect,
  useToggle,
  useTransition,
  // Utils
  clamp,
  addAlpha,
  toRgba,
  // Constants
  CO_HEIGHTS,
} from "@rendar/core";

// Re-export core types (non-emotion specific)
export type { PolymorphicComponentProps, PolymorphicRef } from "@rendar/core";

// Components
export * from "./components";

// Theme
export * from "./theme";

// Emotion-specific hooks
export { useModal } from "./hooks";

// Contexts
export { default as ModalProvider } from "./contexts/modal/ModalProvider";
export { ModalContext, ModalDispatchContext } from "./contexts/modal/ModalProvider";
