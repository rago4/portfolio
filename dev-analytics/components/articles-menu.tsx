'use client'

import { Spinner } from '@/dev-analytics/components/ui/spinner'
import { useMainContext } from '@/dev-analytics/main-context'
import { useArticles } from '@/dev-analytics/services'
import { cn } from '@/dev-analytics/utils'

export function ArticlesMenu() {
  const { data, isLoading, error } = useArticles()
  const { currentArticle, setCurrentArticle } = useMainContext()
  if (isLoading) {
    return <Spinner className="mx-auto" />
  }
  if (error) {
    return <p className="text-sm text-red-600">Failed to load articles</p>
  }
  return (
    <ul className="space-y-2">
      {data?.data.map((article) => (
        <li key={article.id}>
          <button
            className={cn(
              'w-full truncate rounded px-3 py-2 text-left text-sm font-medium hover:bg-slate-100',
              currentArticle?.id === article.id ? 'bg-slate-100' : 'bg-white'
            )}
            type="button"
            onClick={() => {
              setCurrentArticle(article)
            }}
          >
            {article.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
