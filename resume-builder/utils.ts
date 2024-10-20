import clsx from 'clsx'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

export function cn(...classes: ClassNameValue[]) {
  return clsx(twMerge(classes))
}

export function uuid() {
  return Math.random().toString(36).substring(2)
}
