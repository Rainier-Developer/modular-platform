import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-lg border bg-[var(--color-input-bg)] px-3 py-2 text-sm text-[var(--color-input-text)] placeholder:text-[var(--color-input-placeholder)] border-[var(--color-input-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-input-border-focus)] focus-visible:ring-offset-2 focus-visible:border-[var(--color-input-border-focus)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
