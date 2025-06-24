// Color Variants Aligned to Your Palette
export const buttonColors = {
  // Solid Variants
  primary: 'text-white bg-primary-500 hover:bg-primary-600',
  secondary: 'text-white bg-secondary-500 hover:bg-secondary-600',
  accent: 'text-white bg-accent-500 hover:bg-accent-600',
  success: 'text-white bg-success hover:bg-success/90',
  error: 'text-white bg-error hover:bg-error/90',
  neutral: 'text-foreground bg-gray-800 hover:bg-gray-700',

  // Glass Variants
  primary_glass: 'text-white bg-primary-glass backdrop-blur-md border border-white/10 hover:bg-primary-glass',
  secondary_glass: 'text-white bg-secondary-glass backdrop-blur-md border border-white/10 hover:bg-secondary-glass',
  accent_glass: 'text-white bg-accent-glass backdrop-blur-md border border-white/10 hover:bg-accent-glass',
  success_glass: 'text-white bg-success/30 backdrop-blur-md border border-white/10 hover:bg-success/30',
  error_glass: 'text-white bg-error/30 backdrop-blur-md border border-white/10 hover:bg-error/30',
  neutral_glass: 'text-white bg-glass-medium backdrop-blur-md border border-white/10 hover:bg-glass-strong',

  // Optional Gradient CTA
  cta_gradient: 'text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:brightness-110',
};

// Button Style Variations
export const buttonStyles = {
  solid: '',  // Default solid via color keys
  outline: 'border border-current bg-transparent hover:bg-glass-light',
  ghost: 'bg-transparent hover:bg-glass-light',
  link: 'bg-transparent underline underline-offset-4 hover:text-accent-500',
};

// Size and Shape Options
export const buttonVariants = {
  size: {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-8 px-3 py-1 text-xs',
    lg: 'h-12 px-8 py-3 text-base',
    xl: 'h-14 px-10 py-4 text-lg',
    icon: 'h-10 w-10 p-0',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    medium: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  },
};

// Base Button Classes
export const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:scale-[1.08] active:scale-[0.98] shadow-sm hover:shadow-md';
