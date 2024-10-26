export function client<T>(endpoint: string) {
  return fetch(`/dev-analytics/${endpoint}`).then((res) => {
    return res.json() as Promise<{ data: T; error?: string }>
  })
}
