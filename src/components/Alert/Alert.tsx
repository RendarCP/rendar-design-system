import React, { forwardRef, ElementType } from "react";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
// import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { View } from "../View/View";
// import { useOqTheme } from "../../theme/core/OqProvider";
import { useRdTheme } from "@/theme/core/RdProvider";
import useStyles, { AlertVariant } from "./Alert.style";
import { ColorSchema } from "../../theme/palette";
import { Button } from "../Button/Button";

interface AlertProps {
  variant?: AlertVariant;
  children: React.ReactNode;
  color?: ColorSchema;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
}

const IconWrapper = ({ children, size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // currentColor도 동일하게 작동합니다
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// 기본 경고 아이콘 (느낌표)
export const AlertCircleIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
  </IconWrapper>
);

// 삼각형 경고 아이콘
export const AlertTriangleIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </IconWrapper>
);

// 정보 아이콘
export const InfoIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </IconWrapper>
);

// 에러 X 아이콘
export const ErrorIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </IconWrapper>
);

// 성공 체크 아이콘
export const SuccessIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </IconWrapper>
);

export const CloseIcon = ({ size, className }) => (
  <IconWrapper size={size} className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconWrapper>
);

const renderIcon = (type: ColorSchema) => {
  switch (type) {
    case "error":
    case "info":
      return <InfoIcon />;
    case "warning":
      return <AlertTriangleIcon />;
    case "success":
      return <SuccessIcon />;
    default:
      return <InfoIcon />;
  }
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "standard",
      color = "primary",
      children,
      icon,
      action,
      onClose,
    }: AlertProps,
    ref
  ) => {
    const theme = useRdTheme();
    const { classes, cx } = useStyles({ variant, color }, { name: "Alert" });
    return (
      <View<ElementType>
        ref={ref}
        className={cx(classes.root, classes[variant])}
      >
        <div className={classes.icon}>{icon || renderIcon(color)}</div>
        {children}
        <div className={classes.close}>
          {action ||
            (onClose ? (
              <Button
                variant="text"
                size="small"
                onClick={onClose}
                className={classes.closeButton}
              >
                <CloseIcon />
              </Button>
            ) : null)}
        </div>
      </View>
    );
  }
);
