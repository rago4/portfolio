'use client'

import { ArticlesMenu } from '@/dev-analytics/components/articles-menu'
import { MainContextProvider } from '@/dev-analytics/main-context'

export function MainContent() {
  return (
    <MainContextProvider>
      <div className="grid h-[calc(100dvh-63px)] grid-cols-12">
        <aside className="col-span-3 space-y-4 overflow-y-auto border-r border-slate-300 p-4">
          <h2 className="text-lg font-bold">Recent Posts</h2>
          <ArticlesMenu />
        </aside>
        <main className="col-span-9 overflow-y-auto p-4"></main>
      </div>
    </MainContextProvider>
  )
}
