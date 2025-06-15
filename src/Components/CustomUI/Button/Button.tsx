import { cn } from '@/lib/util';
import React from 'react';
import { baseClasses, buttonColors, buttonStyles, buttonVariants } from './Styles';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof buttonColors;
  styleType?: keyof typeof buttonStyles;
  size?: keyof typeof buttonVariants.size;
  rounded?: keyof typeof buttonVariants.rounded;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,
  color = 'default',
  styleType = 'solid',
  size = 'default',
  rounded = 'xl',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    baseClasses,
    buttonColors[color],
    buttonStyles[styleType],
    buttonVariants.size[size],
    buttonVariants.rounded[rounded],
    fullWidth && 'w-full',
    className
  );

  return (
    <button
      type="button"
      aria-disabled={disabled || loading}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A8 8 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
          />
        </svg>
      )}
      {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
