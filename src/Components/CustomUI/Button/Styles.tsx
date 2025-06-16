// Color variants
export const buttonColors = {
  // Solid variants
  default: 'text-white bg-berry-500 hover:bg-berry-600',
  success: 'text-white bg-accent-emerald hover:bg-accent-emerald/80',
  error: 'text-white bg-error hover:bg-error/90',
  secondary: 'text-sand-400 bg-cocoa-700 hover:bg-cocoa-800',
  neutral: 'text-foreground bg-white hover:bg-gray-100',

  // Glass variants (real glassmorphism)
  default_glass: 'text-white bg-berry-500/40 backdrop-blur-md border border-white/10 hover:bg-berry-500/40',
  success_glass: 'text-white bg-accent-emerald/30 backdrop-blur-md border border-white/10 hover:bg-accent-emerald/30',
  error_glass: 'text-white bg-error/30 backdrop-blur-md border border-white/10 hover:bg-error/30',
  secondary_glass: 'text-white bg-cocoa-700/30 backdrop-blur-md border border-white/10',
  neutral_glass: 'text-white bg-white/20 backdrop-blur-md border border-white/10 hover:bg-white/20',
};



export const buttonStyles = {
  solid: '',
  outline: 'border border-current bg-transparent',
  ghost: 'bg-transparent hover:bg-white/10',
  link: 'bg-transparent underline underline-offset-4 hover:text-accent-gold',
};

// Size and shape
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

// Shared base styles
export const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:scale-[1.08] active:scale-[0.98] shadow-sm hover:shadow-md';
