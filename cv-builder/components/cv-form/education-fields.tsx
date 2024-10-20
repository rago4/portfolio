import { PlusIcon, XIcon } from 'lucide-react'

import { Button } from '@/cv-builder/components/ui/button'
import { Input } from '@/cv-builder/components/ui/input'
import { Label } from '@/cv-builder/components/ui/label'
import { type EducationInfo, useMainContext } from '@/cv-builder/main-context'
import { uuid } from '@/cv-builder/utils'

export function EducationFields() {
  const { setDocumentStatus, educationInfo, setEducationInfo } = useMainContext()
  const currentYear = new Date().getFullYear()
  const handleAdd = () => {
    setEducationInfo((educationInfo) => [
      ...educationInfo,
      { id: uuid(), degree: '', institution: '', startYear: '', endYear: '' },
    ])
    setDocumentStatus('idle')
  }
  const handleChange = (id: string, key: keyof EducationInfo, value: string) => {
    setEducationInfo((educationInfo) => {
      return educationInfo.map((info) => {
        return info.id === id ? { ...info, [key]: value } : info
      })
    })
    setDocumentStatus('idle')
  }
  const handleDelete = (id: string) => {
    setEducationInfo((educationInfo) => {
      return educationInfo.filter((info) => info.id !== id)
    })
    setDocumentStatus('idle')
  }
  return (
    <div className="space-y-3">
      <Button
        className="flex items-center space-x-0.5"
        variant="outline"
        type="button"
        onClick={handleAdd}
      >
        <PlusIcon size={16} />
        <span>Add Education</span>
      </Button>
      <ul className="space-y-2">
        {educationInfo.map((info) => {
          return (
            <li key={info.id} className="relative rounded-md border border-slate-200 p-3 shadow-md">
              <button
                className="absolute right-2 top-2"
                type="button"
                onClick={() => handleDelete(info.id)}
              >
                <XIcon size={16} />
              </button>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor={`degree-${info.id}`}>Degree</Label>
                  <Input
                    id={`degree-${info.id}`}
                    className="block w-full"
                    type="text"
                    value={info.degree}
                    onChange={(event) => handleChange(info.id, 'degree', event.target.value)}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <Label htmlFor={`institution-${info.id}`}>Institution</Label>
                  <Input
                    id={`institution-${info.id}`}
                    className="block w-full"
                    type="text"
                    value={info.institution}
                    onChange={(event) => handleChange(info.id, 'institution', event.target.value)}
                    placeholder="University of Technology"
                  />
                </div>
                <div>
                  <Label htmlFor={`start-year-${info.id}`}>Start year</Label>
                  <Input
                    id={`start-year-${info.id}`}
                    className="block w-full"
                    type="number"
                    min={1900}
                    max={currentYear}
                    value={info.startYear}
                    onChange={(event) => {
                      handleChange(info.id, 'startYear', event.target.value)
                    }}
                    placeholder={String(currentYear - 4)}
                  />
                </div>
                <div>
                  <Label htmlFor={`end-year-${info.id}`}>End year</Label>
                  <Input
                    id={`end-year-${info.id}`}
                    className="block w-full"
                    type="number"
                    min={1900}
                    max={currentYear}
                    value={info.endYear}
                    onChange={(event) => {
                      handleChange(info.id, 'endYear', event.target.value)
                    }}
                    placeholder={String(currentYear)}
                  />
                  <p className="text-xs">Leave empty if present</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
