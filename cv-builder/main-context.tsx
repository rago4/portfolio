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

export type ContactInfo = {
  id: string
  type: keyof typeof contactType
  value: string
}

type Context = {
  documentStatus: DocumentStatus
  resetDocumentStatus: () => void
  fields: Fields
  onFieldChange: (key: keyof Fields, value: string) => void
  contactInfo: ContactInfo[]
  setContactInfo: Dispatch<SetStateAction<ContactInfo[]>>
}

export const contactType = {
  dribbble: 'Dribbble',
  email: 'E-mail',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  other: 'Other',
  phone: 'Phone',
  twitter: 'Twitter',
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
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])
  const resetDocumentStatus = () => {
    setDocumentStatus('idle')
  }
  return (
    <MainContext.Provider
      value={{
        documentStatus,
        resetDocumentStatus,
        fields,
        onFieldChange: (key: keyof Fields, value: string) => {
          setFields((fields) => ({ ...fields, [key]: value }))
          resetDocumentStatus()
        },
        contactInfo,
        setContactInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
