import { cn } from '@/cv-builder/utils'

export function Label({ className, ...props }: JSX.IntrinsicElements['label']) {
  return <label className={cn('text-sm font-medium', className)} {...props} />
}
