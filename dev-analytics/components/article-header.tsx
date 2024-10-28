import { ExternalLinkIcon } from 'lucide-react'

import { useMainContext } from '@/dev-analytics/main-context'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { dateStyle: 'medium' })
}

export function ArticleHeader() {
  const { currentArticle } = useMainContext()
  if (!currentArticle) {
    return null
  }
  return (
    <section className="flex items-start justify-between">
      <div>
        <h2 className="text-2xl font-bold">{currentArticle.title}</h2>
        <p className="text-slate-600">{`Published at ${formatDate(currentArticle.publishedAt)}`}</p>
      </div>
      <a
        className="flex items-center space-x-1 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white"
        href={currentArticle.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View</span>
        <ExternalLinkIcon size={12} />
      </a>
    </section>
  )
}
