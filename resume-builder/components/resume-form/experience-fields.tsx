import { PlusIcon, XIcon } from 'lucide-react'

import { Button } from '@/resume-builder/components/ui/button'
import { Input } from '@/resume-builder/components/ui/input'
import { Label } from '@/resume-builder/components/ui/label'
import { Textarea } from '@/resume-builder/components/ui/textarea'
import { type ExperienceInfo, useMainContext } from '@/resume-builder/main-context'
import { uuid } from '@/resume-builder/utils'

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
    <div className="space-y-3">
      <Button
        className="flex items-center space-x-0.5"
        variant="outline"
        type="button"
        onClick={handleAdd}
      >
        <PlusIcon size={16} />
        <span>Add Experience</span>
      </Button>
      <ul className="space-y-2">
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
                    type="month"
                    value={info.startDate}
                    onChange={(event) => handleChange(info.id, 'startDate', event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`end-date-${info.id}`}>End date</Label>
                  <Input
                    id={`end-date-${info.id}`}
                    className="block w-full"
                    type="month"
                    value={info.endDate}
                    onChange={(event) => handleChange(info.id, 'endDate', event.target.value)}
                  />
                  <p className="text-xs">Leave empty if present</p>
                </div>
              </div>
              <div className="col-span-2">
                <Label htmlFor={`description-${info.id}`}>Description</Label>
                <Textarea
                  id={`description-${info.id}`}
                  className="block w-full resize-none"
                  value={info.description}
                  onChange={(event) => handleChange(info.id, 'description', event.target.value)}
                  rows={3}
                  placeholder="Describe your role and responsibilities. Use semicolons to switch from sentence to a list."
                />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
