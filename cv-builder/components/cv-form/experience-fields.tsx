import { PlusIcon, XIcon } from 'lucide-react'

import { Button } from '@/cv-builder/components/ui/button'
import { Input } from '@/cv-builder/components/ui/input'
import { Label } from '@/cv-builder/components/ui/label'
import { type ExperienceInfo, useMainContext } from '@/cv-builder/main-context'
import { uuid } from '@/cv-builder/utils'

export function ExperienceFields() {
  const { setDocumentStatus, experienceInfo, setExperienceInfo } = useMainContext()
  const handleAdd = () => {
    setExperienceInfo((experienceInfo) => [
      ...experienceInfo,
      { id: uuid(), company: '', position: '', startDate: '', endDate: '', description: '' },
    ])
    setDocumentStatus('idle')
  }
  const handleChange = (id: string, key: keyof ExperienceInfo, value: string) => {
    setExperienceInfo((experienceInfo) => {
      return experienceInfo.map((info) => {
        return info.id === id ? { ...info, [key]: value } : info
      })
    })
    setDocumentStatus('idle')
  }
  const handleDelete = (id: string) => {
    setExperienceInfo((experienceInfo) => {
      return experienceInfo.filter((info) => info.id !== id)
    })
    setDocumentStatus('idle')
  }
  return (
    <div>
      <Button
        className="flex items-center space-x-0.5"
        variant="outline"
        type="button"
        onClick={handleAdd}
      >
        <PlusIcon size={16} />
        <span>Add Experience</span>
      </Button>
      <ul>
        {experienceInfo.map((info) => {
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
                  <Label htmlFor={`company-${info.id}`}>Company</Label>
                  <Input
                    id={`company-${info.id}`}
                    className="block w-full"
                    type="text"
                    value={info.company}
                    onChange={(event) => handleChange(info.id, 'company', event.target.value)}
                    placeholder="Acme Corporation"
                  />
                </div>
                <div>
                  <Label htmlFor={`position-${info.id}`}>Position</Label>
                  <Input
                    id={`position-${info.id}`}
                    className="block w-full"
                    type="text"
                    value={info.position}
                    onChange={(event) => handleChange(info.id, 'position', event.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <Label htmlFor={`start-date-${info.id}`}>Start date</Label>
                  <Input
                    id={`start-date-${info.id}`}
                    className="block w-full"
                    type="date"
                    value={info.startDate}
                    onChange={(event) => handleChange(info.id, 'startDate', event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`end-date-${info.id}`}>End date</Label>
                  <Input
                    id={`end-date-${info.id}`}
                    className="block w-full"
                    type="date"
                    value={info.endDate}
                    onChange={(event) => handleChange(info.id, 'endDate', event.target.value)}
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
