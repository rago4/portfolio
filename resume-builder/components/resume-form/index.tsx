import { ContactFields } from '@/resume-builder/components/resume-form/contact-fields'
import { EducationFields } from '@/resume-builder/components/resume-form/education-fields'
import { ExperienceFields } from '@/resume-builder/components/resume-form/experience-fields'
import { Heading } from '@/resume-builder/components/ui/heading'
import { Input } from '@/resume-builder/components/ui/input'
import { Label } from '@/resume-builder/components/ui/label'
import { Textarea } from '@/resume-builder/components/ui/textarea'
import { useMainContext } from '@/resume-builder/main-context'

export function ResumeForm() {
  const { fields, onFieldChange } = useMainContext()
  return (
    <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-1">
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
      <div className="space-y-1">
        <Heading>Contact Information</Heading>
        <ContactFields />
      </div>
      <div className="space-y-1">
        <Heading>Summary</Heading>
        <Textarea
          className="block w-full resize-none"
          value={fields.summary}
          onChange={(event) => onFieldChange('summary', event.target.value)}
          rows={3}
          placeholder="A passionate software engineer with 5 years of experience..."
        />
      </div>
      <div className="space-y-1">
        <Heading>Skills</Heading>
        <Textarea
          className="block w-full resize-none"
          value={fields.skills}
          onChange={(event) => onFieldChange('skills', event.target.value)}
          rows={3}
          placeholder="Comma separated list of skills, e.g. React.js, Next.js, JavaScript (ES6+), TypeScript"
        />
      </div>
      <div className="space-y-1">
        <Heading>Work Experience</Heading>
        <ExperienceFields />
      </div>
      <div className="space-y-1">
        <Heading>Education</Heading>
        <EducationFields />
      </div>
      <div className="space-y-1">
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
