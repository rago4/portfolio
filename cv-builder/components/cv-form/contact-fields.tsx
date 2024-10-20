import { PlusIcon, XIcon } from 'lucide-react'

import { Button } from '@/cv-builder/components/ui/button'
import { Input } from '@/cv-builder/components/ui/input'
import { type ContactInfo, contactType, useMainContext } from '@/cv-builder/main-context'
import { uuid } from '@/cv-builder/utils'

export function ContactFields() {
  const { resetDocumentStatus, contactInfo, setContactInfo } = useMainContext()
  const handleAdd = () => {
    setContactInfo((contactInfo) => [...contactInfo, { id: uuid(), type: 'email', value: '' }])
    resetDocumentStatus()
  }
  const handleChange = (id: string, key: keyof ContactInfo, value: string) => {
    setContactInfo((contactInfo) => {
      return contactInfo.map((info) => {
        return info.id === id ? { ...info, [key]: value } : info
      })
    })
    resetDocumentStatus()
  }
  const handleDelete = (id: string) => {
    setContactInfo((contactInfo) => {
      return contactInfo.filter((info) => info.id !== id)
    })
    resetDocumentStatus()
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
        <span>Add Contact</span>
      </Button>
      <ul>
        {contactInfo.map((info) => {
          let placeholder = `https://${info.type}.com`
          if (info.type === 'email') placeholder = 'example@mail.com'
          if (info.type === 'phone') placeholder = '+1234567890'
          return (
            <li key={info.id} className="grid grid-cols-2 gap-2">
              <select
                className="rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-900 shadow"
                value={info.type}
                onChange={(event) => handleChange(info.id, 'type', event.target.value)}
              >
                {Object.entries(contactType).map(([value, display]) => {
                  return (
                    <option key={value} value={value}>
                      {display}
                    </option>
                  )
                })}
              </select>
              <div className="flex items-center space-x-2">
                <Input
                  className="block w-full"
                  value={info.value}
                  onChange={(event) => handleChange(info.id, 'value', event.target.value)}
                  placeholder={placeholder}
                />
                <button type="button" onClick={() => handleDelete(info.id)}>
                  <XIcon size={16} />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
