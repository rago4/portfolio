'use client'

import dynamic from 'next/dynamic'

import { CVForm } from '@/cv-builder/components/cv-form'
import { CVPreview } from '@/cv-builder/components/cv-preview'
import { MainContextProvider } from '@/cv-builder/main-context'

const PDFExport = dynamic(
  () => import('@/cv-builder/components/pdf-export').then((meta) => meta.PDFExport),
  { ssr: false }
)

export function MainContent() {
  return (
    <MainContextProvider>
      <section className="md:boder-b-0 border-b border-slate-200 p-6 md:border-r">
        <CVForm />
      </section>
      <section className="space-y-3 bg-slate-50 p-6">
        <CVPreview />
        <PDFExport />
      </section>
    </MainContextProvider>
  )
}
