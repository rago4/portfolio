import { cn } from '@/cv-builder/utils'

export const styles = {
  base: 'px-3 py-2 rounded-md font-medium text-sm transition-colors',
  primary: 'text-white bg-slate-900 hover:bg-slate-800',
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
