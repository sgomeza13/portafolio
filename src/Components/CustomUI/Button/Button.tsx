import { cn } from '@/lib/util';
import React from 'react';
import { baseClasses, buttonColors, buttonStyles, buttonVariants } from './Styles';
import { BounceLoader } from 'react-spinners';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // If provided, renders as Link
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
  color = 'primary',
  styleType = 'solid',
  size = 'default',
  rounded = 'xl',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  href,
  ...props
}: ButtonProps) {
  
  const buttonClasses = cn(
    baseClasses,
    buttonColors[color],
    buttonStyles[styleType],
    buttonVariants.size[size],
    buttonVariants.rounded[rounded],
    fullWidth && 'w-full',
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  const content = (
    <>
      {loading && (
        <BounceLoader color="white" size={20} className="mr-2" />
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // If href provided, render as Link for client-side navigation
  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-disabled={disabled || loading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={typeof children === 'string' ? children : 'button'}
      aria-disabled={disabled || loading}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
