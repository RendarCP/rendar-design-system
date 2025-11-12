import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500',
      outlined: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
      ghost: 'hover:bg-gray-100 text-gray-700',
      danger: 'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500',
    },
    size: {
      small: 'text-sm px-3 py-1.5 h-8',
      medium: 'text-base px-4 py-2 h-10',
      large: 'text-lg px-6 py-3 h-12',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * 버튼 내용
   */
  children: React.ReactNode;
  /**
   * 버튼이 비활성화 상태인지 여부
   */
  disabled?: boolean;
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

/**
 * Tailwind 기반 버튼 컴포넌트
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

