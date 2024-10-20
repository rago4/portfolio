import { ContactFields } from '@/cv-builder/components/cv-form/contact-fields'
import { EducationFields } from '@/cv-builder/components/cv-form/education-fields'
import { ExperienceFields } from '@/cv-builder/components/cv-form/experience-fields'
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
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="block w-full"
              type="text"
              value={fields.name}
              onChange={(event) => onFieldChange('name', event.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              className="block w-full"
              type="text"
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
      <div>
        <Heading>Skills</Heading>
        <Textarea
          className="block w-full resize-none"
          value={fields.skills}
          onChange={(event) => onFieldChange('skills', event.target.value)}
          rows={3}
          placeholder="A list of skills separated by semicolon e.g. React.js, Next.js; JavaScript (ES6+), TypeScript"
        />
      </div>
      <div>
        <Heading>Work Experience</Heading>
        <ExperienceFields />
      </div>
      <div>
        <Heading>Education</Heading>
        <EducationFields />
      </div>
      <div>
        <Heading>Consent</Heading>
        <Textarea
          className="block w-full resize-none"
          value={fields.consent}
          onChange={(event) => onFieldChange('consent', event.target.value)}
          rows={3}
          placeholder="I agree to the processing of personal data..."
        />
      </div>
    </form>
  )
}
