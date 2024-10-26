import { KeyIcon } from 'lucide-react'
import { cookies } from 'next/headers'

export function LoginForm() {
  return (
    <form
      className="flex items-center space-x-2"
      action={async (formData) => {
        'use server'
        const apiKey = String(formData.get('api-key') ?? '').trim()
        if (/^[A-z0-9]{24}$/.test(apiKey)) {
          cookies().set('dev-to-key', apiKey, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30, // 30 days
          })
        }
      }}
    >
      <KeyIcon size={16} />
      <input
        className="rounded-md border border-slate-200 p-2 text-sm shadow"
        type="password"
        name="api-key"
        placeholder="Enter API key"
        required
      />
    </form>
  )
}
