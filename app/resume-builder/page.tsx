import { MainContent } from '@/resume-builder/components/main-content'

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
