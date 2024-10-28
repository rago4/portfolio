import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

type ArticleApi = {
  id: number
  title: string
  published_at: string
  url: string
}

export async function GET() {
  const apiKey = cookies().get('dev-to-key')?.value
  if (!apiKey) {
    return NextResponse.json({ data: [] }, { status: 200 })
  }
  try {
    const response = await fetch('https://dev.to/api/articles/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      cache: 'no-store',
    })
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`)
    }
    const articles = (await response.json()) as ArticleApi[]
    return NextResponse.json(
      {
        data: articles.map((article) => ({
          id: String(article.id),
          title: article.title,
          publishedAt: article.published_at,
          url: article.url,
        })),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        data: [],
        error: 'Failed to fetch articles',
      },
      { status: 500 }
    )
  }
}
