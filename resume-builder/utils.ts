import clsx from 'clsx'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

export function cn(...classes: ClassNameValue[]) {
  return clsx(twMerge(classes))
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export function str2arr(strValue: string, delimiter = ';') {
  return strValue.length > 0
    ? strValue
        .split(delimiter)
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
    : []
}

export function uuid() {
  return Math.random().toString(36).substring(2)
}
