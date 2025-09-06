import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:scale-105 active:scale-95',
          {
            // Primary button
            'bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] border border-[var(--color-button-primary-border)] hover:bg-[var(--color-button-primary-hover)] shadow-md hover:shadow-lg': variant === 'primary',
            
            // Secondary button
            'bg-[var(--color-button-secondary-bg)] text-[var(--color-button-secondary-text)] border border-[var(--color-button-secondary-border)] hover:bg-[var(--color-button-secondary-hover)]': variant === 'secondary',
            
            // Outline button
            'bg-[var(--color-button-outline-bg)] text-[var(--color-button-outline-text)] border border-[var(--color-button-outline-border)] hover:bg-[var(--color-button-outline-hover)] hover:text-white': variant === 'outline',
            
            // Ghost button
            'bg-[var(--color-button-ghost-bg)] text-[var(--color-button-ghost-text)] border border-[var(--color-button-ghost-border)] hover:bg-[var(--color-button-ghost-hover)]': variant === 'ghost',
            
            // Destructive button
            'bg-[var(--color-button-destructive-bg)] text-[var(--color-button-destructive-text)] border border-[var(--color-button-destructive-border)] hover:bg-[var(--color-button-destructive-hover)] shadow-md hover:shadow-lg': variant === 'destructive',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-12 px-6 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
