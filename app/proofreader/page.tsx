import { type Metadata } from 'next'
import Link from 'next/link'

import { MainContent } from '@/proofreader/components/main-content'

const title = 'AI Proofreading Tool'
const description =
  'Professional text proofreading tool powered by Groq AI. Supports multiple writing styles and formats.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['proofreading', 'AI writing', 'text editor', 'Groq AI', 'writing assistant'],
  authors: [{ name: 'Rafal Golawski' }],
  openGraph: {
    title,
    description,
    url: 'https://rgolawski.vercel.app/proofreader',
    siteName: 'Proofreading Tool',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title,
    description,
  },
}

export default function ProofreaderPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-slate-100 px-4 py-8 font-geist-sans text-slate-900">
      <main className="mx-auto w-full max-w-2xl space-y-3 rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Proofreading Tool</h1>
          <p className="text-sm text-slate-600">
            Enter your text and preferences to get a proofread version.
          </p>
        </div>
        <MainContent />
      </main>
      <footer>
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Link className="text-sm hover:underline" href="/proofreader/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:underline" href="/proofreader/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:underline" href="/">
                Reach out
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
