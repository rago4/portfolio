'use client'

import { CVForm } from '@/cv-builder/components/cv-form'
import { CVPreview } from '@/cv-builder/components/cv-preview'
import { MainContextProvider } from '@/cv-builder/main-context'

export function MainContent() {
  return (
    <MainContextProvider>
      <section className="md:boder-b-0 border-b border-slate-200 p-6 md:border-r">
        <CVForm />
      </section>
      <section className="bg-slate-50 p-6">
        <CVPreview />
      </section>
    </MainContextProvider>
  )
}
