import { TokenForm } from '@/dev-analytics/components/token-form'

export default function DevAnalyticsPage() {
  return (
    <div className="font-geist-sans text-slate-900">
      <header className="flex justify-end border-b border-slate-300 px-4 py-3">
        <TokenForm />
      </header>
      <div className="grid h-[calc(100dvh-63px)] grid-cols-12">
        <aside className="col-span-3 overflow-y-auto border-r border-slate-300 p-4">
          <h2 className="text-lg font-bold">Recent Posts</h2>
        </aside>
        <main className="col-span-9 overflow-y-auto p-4"></main>
      </div>
    </div>
  )
}
