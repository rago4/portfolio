import useSWRImmutable from 'swr/immutable'

export type Article = {
  id: string
  title: string
}

function client<T>(endpoint: string) {
  return fetch(`/dev-analytics/${endpoint}`).then((res) => {
    return res.json() as Promise<{ data: T; error?: string }>
  })
}

export function useArticles() {
  return useSWRImmutable('articles', () => {
    return client<Article[]>('articles')
  })
}
