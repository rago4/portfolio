'use client'

import { useArticles } from '@/dev-analytics/services'

export function ArticlesMenu() {
  const { data, isLoading, error } = useArticles()
  if (isLoading) {
    return <p className="text-sm text-slate-600">Fetching articles...</p>
  }
  if (error) {
    return <p className="text-sm text-red-600">Failed to load articles</p>
  }
  return (
    <ul className="space-y-2">
      {data?.data.map((article) => (
        <li key={article.id}>
          <button className="w-full truncate rounded px-3 py-2 text-left text-sm font-medium hover:bg-slate-100">
            {article.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
