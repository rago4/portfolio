import { createContext, type ReactNode, useContext, useState } from 'react'

type Fields = {
  name: string
  title: string
}

type Context = {
  fields: Fields
  onFieldChange: (key: keyof Fields, value: string) => void
}

const MainContext = createContext<Context | undefined>(undefined)

export const useMainContext = () => {
  const context = useContext(MainContext)
  if (typeof context === 'undefined') {
    throw new Error('useMainContext must be used within a MainContextProvider')
  }
  return context
}

export function MainContextProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState<Fields>({
    name: '',
    title: '',
  })
  return (
    <MainContext.Provider
      value={{
        fields,
        onFieldChange: (key: keyof Fields, value: string) => {
          setFields((fields) => ({ ...fields, [key]: value }))
        },
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
