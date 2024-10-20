import { cn } from '@/resume-builder/utils'

export function Input({ className, ...props }: JSX.IntrinsicElements['input']) {
  return (
    <input
      className={cn(
        'rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-900 shadow',
        className
      )}
      {...props}
    />
  )
}
