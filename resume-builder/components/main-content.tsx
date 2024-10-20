'use client'

import dynamic from 'next/dynamic'

import { ResumeForm } from '@/resume-builder/components/resume-form'
import { ResumePreview } from '@/resume-builder/components/resume-preview'
import { MainContextProvider } from '@/resume-builder/main-context'

const PDFExport = dynamic(
  () => import('@/resume-builder/components/pdf-export').then((meta) => meta.PDFExport),
  { ssr: false }
)

export function MainContent() {
  return (
    <MainContextProvider>
      <section className="md:boder-b-0 border-b border-slate-200 p-6 md:border-r">
        <ResumeForm />
      </section>
      <section className="space-y-3 bg-slate-50 p-6">
        <ResumePreview />
        <PDFExport />
      </section>
    </MainContextProvider>
  )
}
