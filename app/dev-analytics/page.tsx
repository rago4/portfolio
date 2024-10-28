import { LoginForm } from '@/dev-analytics/components/login-form'
import { MainContent } from '@/dev-analytics/components/main-content'

export default function DevAnalyticsPage() {
  return (
    <div className="font-geist-sans text-slate-900">
      <header className="flex justify-end border-b border-slate-300 px-4 py-3">
        <LoginForm />
      </header>
      <MainContent />
    </div>
  )
}
