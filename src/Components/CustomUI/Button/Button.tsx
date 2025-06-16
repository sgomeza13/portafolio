import { cn } from '@/lib/util';
import React from 'react';
import { baseClasses, buttonColors, buttonStyles, buttonVariants } from './Styles';
import { BounceLoader } from 'react-spinners';


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
      aria-label='button'
      aria-disabled={disabled || loading}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <BounceLoader color="white" size={20}  className='mr-2'/>
      )}
      {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
