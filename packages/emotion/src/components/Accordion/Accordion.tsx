import React, { useState, forwardRef, useEffect, useRef } from "react";
import { ArrowDownIcon as KeyboardArrowDownIcon } from "../icons";
// import { useOqTheme } from '../../../theme/core/OqProvider';
import { useRdTheme } from "@/theme/core/RdProvider";
import { View } from "../View/View";
import useStyles, { AccordionVariant } from "./Accordion.style";
import { AccordionSummary } from "./AccordionSummary/AccordionSummary";
import { AccordionDetail } from "./AccordionDetail/AccordionDetail";
import { useControlled } from "@rendar/core";

interface AccordionProps {
  // 아코디언 타입 정의 'standard' | 'outlined' | 'filled'
  variant?: AccordionVariant;
  // 아코디언은 무조건 children
  children: React.ReactNode;
  // disabled 여부
  disabled?: boolean;
  // expanded 기본값 설정
  defaultExpanded?: boolean;
  // expanded 값 설정
  expanded?: boolean;
  // expanded event 함수
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  // accordion style override
  overrideStyles?: any;
}

const AccordionCompoent = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      variant = "standard",
      children,
      disabled = false,
      defaultExpanded = false,
      expanded: expandedProp,
      onChange,
      overrideStyles,
      ...props
    }: AccordionProps,
    ref
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    useEffect(() => {
      if (contentRef.current) {
        // expanded가 false일 때도 실제 높이를 측정하기 위해
        // 임시로 visibility를 visible로 설정
        const element = contentRef.current;
        const originalVisibility = element.style.visibility;
        const originalHeight = element.style.height;
        const originalPosition = element.style.position;

        element.style.visibility = "hidden";
        element.style.height = "auto";
        element.style.position = "absolute";

        const height = element.scrollHeight;

        // 원래 스타일로 복구
        element.style.visibility = originalVisibility;
        element.style.height = originalHeight;
        element.style.position = originalPosition;

        setContentHeight(height);
      }
    }, [children, expandedProp]); // children이 변경될 때도 높이를 다시 계산
    const theme = useRdTheme();
    const [expanded, setExpandedState] = useControlled({
      controlled: expandedProp,
      default: defaultExpanded,
      name: "Accordion",
      state: "expanded",
    });
    const { classes, cx } = useStyles(
      { expanded },
      { overrideStyles, name: "Accordion" }
    );

    const handleChange = React.useCallback(
      (event: any) => {
        setExpandedState(!expanded);

        if (onChange) {
          onChange(event, !expanded);
        }
      },
      [expanded, onChange, setExpandedState]
    );

    const renderChildren = (name: any) => {
      return React.Children.toArray(children).find(
        (child: any) => child.type.displayName === name
      );
    };

    return (
      <View<React.ElementType>
        // component="button"
        ref={ref}
        disabled={disabled}
        className={cx(classes.root, classes[variant])}
        {...props}
      >
        <View<React.ElementType>
          component="button"
          disabled={disabled}
          onClick={handleChange}
          className={classes["Summary-wrapper"]}
        >
          {renderChildren("Accordion.Summary")}
          <div className={classes.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                fill="currentColor"
              />
            </svg>
          </div>
        </View>

        <div
          className={classes["Detail-wrapper"]}
          style={{ height: expanded ? `${contentHeight}px` : "0px" }}
        >
          <div ref={contentRef} className={classes["Detail-inner"]}>
            {renderChildren("Accordion.Detail")}
          </div>
        </div>
      </View>
    );
  }
);

interface IAccordion
  extends React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  > {
  Summary: typeof AccordionSummary;
  Detail: typeof AccordionDetail;
}

export const Accordion = {
  ...AccordionCompoent,
  Summary: AccordionSummary,
  Detail: AccordionDetail,
} as IAccordion;
