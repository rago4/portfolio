import useSWR from 'swr'

function client<T>(endpoint: string) {
  return fetch(`/dev-analytics/${endpoint}`).then((res) => {
    return res.json() as Promise<{ data: T; error?: string }>
  })
}

export function useArticles() {
  return useSWR('articles', () => client<{ id: string; title: string }[]>('articles'))
}
