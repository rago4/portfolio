import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react'

import { type Article, useArticles } from '@/dev-analytics/services'

type Nullable<T> = T | null

type Context = {
  currentArticle: Nullable<Article>
  setCurrentArticle: Dispatch<SetStateAction<Nullable<Article>>>
}

const MainContext = createContext<Context | undefined>(undefined)

export function useMainContext() {
  const context = useContext(MainContext)
  if (typeof context === 'undefined') {
    throw new Error('useMainContext must be used within a MainContextProvider')
  }
  return context
}

export function MainContextProvider({ children }: { children: ReactNode }) {
  const articles = useArticles()
  const [currentArticle, setCurrentArticle] = useState(articles.data?.data[0] ?? null)
  return (
    <MainContext.Provider value={{ currentArticle, setCurrentArticle }}>
      {children}
    </MainContext.Provider>
  )
}
