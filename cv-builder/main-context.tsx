import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react'

type DocumentStatus = 'idle' | 'ready'

type Fields = {
  name: string
  title: string
}

type Context = {
  documentStatus: DocumentStatus
  setDocumentStatus: Dispatch<SetStateAction<DocumentStatus>>
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
  const [documentStatus, setDocumentStatus] = useState<DocumentStatus>('idle')
  const [fields, setFields] = useState<Fields>({
    name: '',
    title: '',
  })
  return (
    <MainContext.Provider
      value={{
        documentStatus,
        setDocumentStatus,
        fields,
        onFieldChange: (key: keyof Fields, value: string) => {
          setFields((fields) => ({ ...fields, [key]: value }))
          setDocumentStatus('idle')
        },
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
