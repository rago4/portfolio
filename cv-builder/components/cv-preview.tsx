import { useMainContext } from '@/cv-builder/main-context'

export function CVPreview() {
  const { fields } = useMainContext()
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {fields.name.length > 0 && <p className="text-3xl font-bold">{fields.name}</p>}
      {fields.title.length > 0 && <p className="text-slate-500">{fields.title}</p>}
    </div>
  )
}
