import { Input } from '@/cv-builder/components/ui/input'
import { Label } from '@/cv-builder/components/ui/label'
import { useMainContext } from '@/cv-builder/main-context'

export function CVForm() {
  const { fields, onFieldChange } = useMainContext()
  return (
    <form onSubmit={(event) => event.preventDefault()}>
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
    </form>
  )
}
