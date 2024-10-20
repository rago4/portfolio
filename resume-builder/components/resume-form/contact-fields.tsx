import { PlusIcon, XIcon } from 'lucide-react'

import { Button } from '@/resume-builder/components/ui/button'
import { Input } from '@/resume-builder/components/ui/input'
import { type ContactInfo, contactType, useMainContext } from '@/resume-builder/main-context'
import { uuid } from '@/resume-builder/utils'

export function ContactFields() {
  const { setDocumentStatus, contactInfo, setContactInfo } = useMainContext()
  const handleAdd = () => {
    setContactInfo((contactInfo) => [...contactInfo, { id: uuid(), type: 'email', value: '' }])
    setDocumentStatus('idle')
  }
  const handleChange = (id: string, key: keyof ContactInfo, value: string) => {
    setContactInfo((contactInfo) => {
      return contactInfo.map((info) => {
        return info.id === id ? { ...info, [key]: value } : info
      })
    })
    setDocumentStatus('idle')
  }
  const handleDelete = (id: string) => {
    setContactInfo((contactInfo) => {
      return contactInfo.filter((info) => info.id !== id)
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
        <span>Add Contact</span>
      </Button>
      <ul className="space-y-2">
        {contactInfo.map((info) => {
          let inputProps: JSX.IntrinsicElements['input'] = {
            type: 'url',
            placeholder: `https://${info.type}.com`,
          }
          if (info.type === 'email') {
            inputProps = {
              type: 'email',
              placeholder: 'example@mail.com',
            }
          }
          if (info.type === 'phone') {
            inputProps = {
              type: 'tel',
              placeholder: '+1234567890',
            }
          }
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
                  {...inputProps}
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
