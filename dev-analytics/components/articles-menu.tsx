import { Spinner } from '@/dev-analytics/components/ui/spinner'
import { useArticles } from '@/dev-analytics/services'
import { cn } from '@/dev-analytics/utils'

export function ArticlesMenu({
  activeId,
  onItemClick,
}: {
  activeId: string
  onItemClick: (id: string) => void
}) {
  const articles = useArticles()
  if (articles.isLoading) {
    return <Spinner className="mx-auto" />
  }
  if (articles.error) {
    return <p className="text-sm text-red-600">Failed to load articles</p>
  }
  return (
    <ul className="space-y-2">
      {articles.data?.data.map((article) => (
        <li key={article.id}>
          <button
            className={cn(
              'w-full truncate rounded px-3 py-2 text-left text-sm font-medium hover:bg-slate-100',
              article.id === activeId ? 'bg-slate-100' : 'bg-white'
            )}
            type="button"
            onClick={() => {
              onItemClick(article.id)
            }}
          >
            {article.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
