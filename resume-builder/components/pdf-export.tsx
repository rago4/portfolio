import { BlobProvider, Document, Font, Page, Styles, Text, View } from '@react-pdf/renderer'

import { Button, styles as buttonStyles } from '@/resume-builder/components/ui/button'
import { useMainContext } from '@/resume-builder/main-context'
import { cn } from '@/resume-builder/utils'

Font.register({
  family: 'Geist Sans',
  fonts: [
    { src: '/fonts/Geist-Regular.otf', fontWeight: 400 },
    { src: '/fonts/Geist-SemiBold.otf', fontWeight: 500 },
    { src: '/fonts/Geist-Bold.otf', fontWeight: 700 },
  ],
})

const styles: Styles = {
  // shared
  section: {
    marginBottom: 24,
  },
  text: {
    color: '#475569',
  },
  link: {
    textDecoration: 'underline',
  },
  // components
  mainView: {
    fontFamily: 'Geist Sans',
    fontSize: 16,
    fontWeight: 400,
    color: '#0f172a',
    padding: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 700,
  },
}

export function PdfExport() {
  const { documentStatus, setDocumentStatus, fields } = useMainContext()
  if (documentStatus === 'idle') {
    return (
      <Button variant="primary" onClick={() => setDocumentStatus('ready')}>
        Prepare PDF
      </Button>
    )
  }
  return (
    <BlobProvider
      document={
        <Document>
          <Page size="A4">
            <View style={styles.mainView}>
              <View style={styles.section}>
                <Text style={styles.name}>{fields.name}</Text>
                <Text style={styles.text}>{fields.title}</Text>
              </View>
              <View style={styles.section}></View>
            </View>
          </Page>
        </Document>
      }
    >
      {({ loading, error, url }) => {
        if (loading) {
          return (
            <Button variant="primary" disabled>
              Generating...
            </Button>
          )
        }
        if (error) {
          return <p className="font-mono text-sm text-slate-600">{`Error: ${error.message}`}</p>
        }
        return (
          <a
            className={cn('inline-block', buttonStyles.base, buttonStyles.primary)}
            href={url || ''}
            download="resume.pdf"
          >
            Download PDF
          </a>
        )
      }}
    </BlobProvider>
  )
}
