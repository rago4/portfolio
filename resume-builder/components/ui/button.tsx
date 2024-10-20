import { cn } from '@/resume-builder/utils'

export const styles = {
  base: 'rounded-md px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed',
  primary: 'bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-600',
  outline: 'border border-slate-300 bg-white hover:bg-slate-50',
}

const stylesMap = {
  primary: styles.primary,
  outline: styles.outline,
}

export function Button({
  variant,
  className,
  ...props
}: { variant: 'primary' | 'outline' } & JSX.IntrinsicElements['button']) {
  return <button className={cn(styles.base, stylesMap[variant], className)} {...props} />
}
