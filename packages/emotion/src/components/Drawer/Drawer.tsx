import React, {
  useEffect,
  ElementType,
  ReactNode,
  forwardRef,
  KeyboardEventHandler,
} from "react";
import { CloseIcon } from "../icons";
import useStyles, { DrawerPosition } from "./Drawer.style";
import { View } from "../View/View";
import { Overlay } from "../Overlay/Overlay";
import { Button } from "../Button/Button";
import { GroupedTransition } from "../Transition/GroupedTransition";
import { useFocusReturn } from '@rendar/core';
import { useRdTheme } from "@/theme/core/RdProvider";
import { RdComponentProps } from "@/theme/core/theme/types/RdComponentProps";
import { useFocusTrap } from '@rendar/core';

const transitions: any = {
  top: "slide-down",
  bottom: "slide-up",
  left: "slide-right",
  right: "slide-left",
};

interface DrawerProps extends RdComponentProps<never> {
  open?: boolean;
  /** Drawer의 타이틀을 정합니다. */
  title?: React.ReactNode;

  /** Drawer 컴포넌트가 등장할 위치를 정합니다. */
  position?: DrawerPosition;

  /**
   * Drawer 컴포넌트의 크기를 지정합니다.
   * position 속성이 left 혹은 right일 경우 너비를
   * position 속성이 top 혹은 bottom일 경우 높이가 조정됩니다.
   */
  size?: string | "full" | number;

  /** Drawer 컴포넌트에 그림자를 적용합니다. */
  shadow?: any;

  /** Drawer 컴포넌트 내부 영역에 padding을 줍니다. */
  padding?: any | number;

  /** Drawer 컴포넌트의 z-index를 정합니다. */
  zIndex?: any | number;

  /** true일 경우 Drawer 컴포넌트로 focus를 옮겨오지 않습니다. */
  noFocusTrap?: boolean;

  /** true일 경우 스크롤 잠금을 해제합니다. */
  noScrollLock?: boolean;

  /** true일 경우 바깥 쪽을 클릭해도 Drawer가 닫히지 않습니다. */
  noCloseOnClickOutside?: boolean;

  /** true일 경우 ESC를 눌러도 Drawer가 닫히지 않습니다. */
  noCloseOnEscape?: boolean;

  /** transition 속성을 정의합니다. */
  transition?: any;

  /** Transition이 실행되는 시간을 ms 단위로 정합니다. */
  transitionDuration?: number;

  /** Drawer 컴포넌트에 transitionTimingFunction css 속성을 정의합니다. */
  transitionTimingFunction?: string;

  /** true일 경우 배경 Overlay를 제거합니다. */
  noOverlay?: boolean;

  /** Overlay의 opacity를 설정합니다. */
  overlayOpacity?: number;

  /** Overlay 색상을 정합니다. */
  overlayColor?: string;

  /** true일 경우 Close 버튼이 제거됩니다. */
  hideCloseButton?: boolean;

  /** Drawer 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Drawer 컴포넌트가 닫힐 때 실행됩니다. */
  onClose(): void;

  children?: ReactNode;
}

export const Drawer = forwardRef(
  (
    {
      open = false,
      title,
      position = "left",
      size = "medium",
      noFocusTrap = false,
      noCloseOnClickOutside = false,
      noCloseOnEscape = false,
      transition,
      transitionDuration = 250,
      transitionTimingFunction = "ease",
      zIndex = "modal",
      overlayColor,
      overlayOpacity,
      children,
      noOverlay = false,
      hideCloseButton,
      onClose,
      className,
      overrideStyles,
      ...props
    }: DrawerProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles(
      { size, position },
      { overrideStyles, name: "Drawer" }
    );
    const focusTrapRef = useFocusTrap(!noFocusTrap && open);

    const drawerTransition = transition || transitions[position];
    const _overlayOpacity =
      // eslint-disable-next-line no-nested-ternary
      typeof overlayOpacity === "number"
        ? overlayOpacity
        : theme.colorScheme === "dark"
          ? 0.85
          : 0.75;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (noFocusTrap && event.code === "Escape" && !noCloseOnEscape) {
        onClose();
      }
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (noFocusTrap) {
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
      }
    }, [noFocusTrap]);

    useFocusReturn({ open, transitionDuration });
    return (
      <GroupedTransition
        mounted={open}
        transitions={{
          overlay: {
            duration: transitionDuration / 2,
            transition: "fade",
            timingFunction: "ease",
          },
          drawer: {
            duration: transitionDuration,
            transition: drawerTransition,
            timingFunction: transitionTimingFunction,
          },
        }}
      >
        {(transitionStyles) => (
          <View
            className={cx(
              classes.root,
              { [classes.noOverlay]: noOverlay },
              className
            )}
            role="dialog"
            aria-modal
            onMouseDown={() => !noCloseOnClickOutside && onClose()}
            {...props}
          >
            <View
              onMouseDown={(event: any) => event.stopPropagation()}
              className={cx(classes.drawer, className)}
              ref={focusTrapRef}
              style={{
                ...transitionStyles.drawer,
                zIndex: 3000 + 2,
              }}
              tabIndex={-1}
              onKeyDownCapture={(event: any) =>
                event.nativeEvent.code === "Escape" &&
                !noCloseOnEscape &&
                onClose()
              }
            >
              {(title || !hideCloseButton) && (
                <div className={classes.header}>
                  <div className={classes.title}>{title}</div>

                  {!hideCloseButton && (
                    <Button
                      onClick={onClose}
                      variant="unstyled"
                      size="small"
                      overrideStyles={{
                        unstyled: {
                          color: "rgb(158,158,158)",
                        },
                      }}
                    >
                      <svg
                        style={{ width: 24 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </Button>
                  )}
                </div>
              )}
              {children}
            </View>

            {!noOverlay && (
              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  opacity={_overlayOpacity}
                  zIndex={zIndex}
                  color={
                    overlayColor ||
                    (theme.colorScheme === "dark"
                      ? theme.palette.grey[500]
                      : theme.palette.common.black)
                  }
                />
              </div>
            )}
          </View>
        )}
      </GroupedTransition>
    );
  }
);
