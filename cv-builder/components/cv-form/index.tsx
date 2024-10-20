import { ContactFields } from '@/cv-builder/components/cv-form/contact-fields'
import { Heading } from '@/cv-builder/components/ui/heading'
import { Input } from '@/cv-builder/components/ui/input'
import { Label } from '@/cv-builder/components/ui/label'
import { Textarea } from '@/cv-builder/components/ui/textarea'
import { useMainContext } from '@/cv-builder/main-context'

export function CVForm() {
  const { fields, onFieldChange } = useMainContext()
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <Heading>Personal Information</Heading>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-0.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="block w-full"
              value={fields.name}
              onChange={(event) => onFieldChange('name', event.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-0.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              className="block w-full"
              value={fields.title}
              onChange={(event) => onFieldChange('title', event.target.value)}
              placeholder="Software Engineer"
            />
          </div>
        </div>
      </div>
      <div>
        <Heading>Contact Information</Heading>
        <ContactFields />
      </div>
      <div>
        <Heading>Summary</Heading>
        <Textarea
          className="block w-full resize-none"
          value={fields.summary}
          onChange={(event) => onFieldChange('summary', event.target.value)}
          rows={3}
          placeholder="A passionate software engineer with 5 years of experience..."
        />
      </div>
    </form>
  )
}
