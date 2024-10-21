import { type Metadata } from 'next'

import { MainContent } from '@/resume-builder/components/main-content'

const title = 'Resume Builder | Create Professional Resumes'
const description =
  'Build and customize your professional resume with our easy-to-use resume builder. Live preview and PDF export available.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['resume builder', 'CV maker', 'job application', 'career tools'],
  authors: [{ name: 'Rafal Golawski' }],
  openGraph: {
    title,
    description,
    url: 'https://rgolawski.vercel.app/resume-builder',
    siteName: 'Resume Builder',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title,
    description,
  },
}

export default function ResumeBuilderPage() {
  return (
    <>
      <header className="sticky left-0 top-0 z-10 bg-slate-950 p-2 text-center">
        <p className="text-sm text-white">
          Like this project?{' '}
          <a
            className="underline"
            href="https://buymeacoffee.com/rgolawski"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a sponsor.
          </a>
        </p>
      </header>
      <main className="grid min-h-screen font-geist-sans text-slate-900 md:grid-cols-2">
        <MainContent />
      </main>
    </>
  )
}
