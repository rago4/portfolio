'use client'

import { useState } from 'react'

import { ArticleHeader } from '@/dev-analytics/components/article-header'
import { ArticlesMenu } from '@/dev-analytics/components/articles-menu'
import { type Article, useArticles } from '@/dev-analytics/services'

export function MainContent() {
  const articles = useArticles()
  const [article, setArticle] = useState<Article | undefined>(undefined)
  return (
    <div className="grid h-[calc(100dvh-63px)] grid-cols-12">
      <aside className="col-span-3 space-y-4 overflow-y-auto border-r border-slate-300 p-4">
        <h2 className="text-lg font-bold">Recent Posts</h2>
        <ArticlesMenu
          activeId={article?.id ?? ''}
          onItemClick={(id) => {
            setArticle(articles.data?.data.find((article) => article.id === id))
          }}
        />
      </aside>
      <main className="col-span-9 overflow-y-auto bg-slate-50 p-8">
        {!article ? (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-sm text-slate-600">Select an article to see more details</p>
          </div>
        ) : (
          <ArticleHeader data={article} />
        )}
      </main>
    </div>
  )
}
