import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { NextResponse } from 'next/server'
import z from 'zod'

const ProofreadingSchema = z.object({
  apiKey: z.string().length(56).startsWith('gsk_'),
  text: z.string().min(1).max(1000),
  style: z.enum(['casual', 'semi-formal', 'formal']),
  format: z.enum(['sentences', 'bullet-list', 'short-email']),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = ProofreadingSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    const { apiKey, text, style, format } = result.data
    const groq = createOpenAI({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey,
    })
    const { text: proofreadText } = await generateText({
      model: groq('llama3-8b-8192'),
      system: `You're a professional proofreader. Your task is to:
1. Correct grammatical and spelling errors
2. Make minimal adjustments to improve readability
3. Maintain the original meaning and context
4. Apply the specified tone: ${style}
5. Format the output in ${format} style

Guidelines:
- Limit changes to essential corrections
- Preserve original voice and intent
- Follow standard [US/UK] English conventions
- Handle formatting consistently

Start directly with the proofread content. DO NOT include any text like "Here is the proofread text" or "Here's your result"!`,
      prompt: `Text to proofread: ${text}`,
    })
    return NextResponse.json({ proofreadText })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'An error occurred while proofreading' }, { status: 500 })
  }
}
