import { cn } from '@/dev-analytics/utils'

export function Spinner({ className, ...props }: JSX.IntrinsicElements['div']) {
  return (
    <div
      className={cn(
        'h-5 w-5 animate-spin rounded-full border-[3px] border-slate-900/20 border-t-slate-900',
        className
      )}
      {...props}
    />
  )
}
