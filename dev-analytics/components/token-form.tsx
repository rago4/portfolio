import { KeyIcon } from 'lucide-react'

export function TokenForm() {
  return (
    <form className="flex items-center space-x-2">
      <KeyIcon size={16} />
      <input
        className="rounded-md border border-slate-200 p-2 text-sm shadow"
        type="password"
        name="dev-to-key"
        placeholder="Enter API key"
        required
      />
    </form>
  )
}
