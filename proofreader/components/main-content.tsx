'use client'

import { type ChangeEvent, FormEvent, useState } from 'react'

const styleOptions = [
  { value: 'casual', label: 'Casual' },
  { value: 'semi-formal', label: 'Semi-Formal' },
  { value: 'formal', label: 'Formal' },
]
const formatOptions = [
  { value: 'sentences', label: 'Sentences' },
  { value: 'bullet-list', label: 'Bullet List' },
  { value: 'short-email', label: 'E-mail' },
]

export function MainContent() {
  const [formData, setFormData] = useState({
    apiKey: '',
    text: '',
    style: styleOptions[0].value,
    format: formatOptions[0].value,
  })
  const [generation, setGeneration] = useState({
    isLoading: false,
    error: false,
    completion: '',
  })
  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setGeneration({ isLoading: true, error: false, completion: '' })
    try {
      const response = await fetch('/proofreader/completion', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      const data = (await response.json()) as { error?: string; proofreadText?: string }
      if (data?.error) {
        throw new Error(data.error)
      }
      setGeneration((prev) => ({
        ...prev,
        isLoading: false,
        completion: data.proofreadText ?? '',
      }))
    } catch (error) {
      console.error(error)
      setGeneration((prev) => ({
        ...prev,
        isLoading: false,
        error: true,
      }))
    }
  }
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium" htmlFor="apiKey">
            Groq API key
          </label>
          <input
            id="apiKey"
            className="block w-full rounded-md border border-slate-200 p-2 text-sm shadow"
            type="password"
            name="apiKey"
            value={formData.apiKey}
            onChange={handleFieldChange}
            placeholder="Enter your Groq API key"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="text">
            Text to Proofread
          </label>
          <textarea
            id="text"
            className="block w-full resize-y rounded-md border border-slate-200 p-2 text-sm shadow"
            name="text"
            value={formData.text}
            onChange={handleFieldChange}
            rows={5}
            placeholder="Enter the text you want to proofread (max 1000 characters)"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium" htmlFor="style">
              Style
            </label>
            <select
              id="style"
              className="block w-full rounded-md border border-slate-200 p-2 text-sm shadow"
              name="style"
              value={formData.style}
              onChange={handleFieldChange}
              required
            >
              {styleOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                )
              })}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="format">
              Format
            </label>
            <select
              id="format"
              className="block w-full rounded-md border border-slate-200 p-2 text-sm shadow"
              name="format"
              value={formData.format}
              onChange={handleFieldChange}
              required
            >
              {formatOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <button
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          type="submit"
          disabled={generation.isLoading}
        >
          {generation.isLoading ? 'Proofreading...' : 'Proofread'}
        </button>
      </form>
      {generation.error && (
        <p className="rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-500">
          Something went wrong. Please check your API key and other fields and try again.
        </p>
      )}
      {generation.completion.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Proofread Text</h2>
          <p className="whitespace-pre-wrap rounded-md border border-slate-200 bg-slate-100 p-4 text-sm">
            {generation.completion}
          </p>
        </div>
      )}
    </>
  )
}
