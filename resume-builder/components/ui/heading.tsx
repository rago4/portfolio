import { cn } from '@/resume-builder/utils'

export function Heading({ className, ...props }: JSX.IntrinsicElements['h2']) {
  return <h2 className={cn('text-lg font-bold', className)} {...props} />
}
