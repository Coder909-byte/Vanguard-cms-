import React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  error: 'bg-red-500 hover:bg-red-600 text-white',
  default: 'bg-zinc-800 hover:bg-zinc-700 text-white'
};

export function Button({
  children,
  variant = 'default',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'font-retro',
        'border-[4px] border-black dark:border-white',
        'rounded-none',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        'px-4 py-2',
        'transition-all',
        'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
        buttonVariants[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}