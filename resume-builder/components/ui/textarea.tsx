import { cn } from '@/resume-builder/utils'

export function Textarea({ className, ...props }: JSX.IntrinsicElements['textarea']) {
  return (
    <textarea
      className={cn(
        'rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-900 shadow',
        className
      )}
      {...props}
    />
  )
}
