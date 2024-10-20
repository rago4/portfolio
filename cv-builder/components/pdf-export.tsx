import { BlobProvider, Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

import { Button, styles as buttonStyles } from '@/cv-builder/components/ui/button'
import { useMainContext } from '@/cv-builder/main-context'
import { cn } from '@/cv-builder/utils'

Font.register({
  family: 'Geist Sans',
  src: '/GeistVF.woff',
})

const styles = StyleSheet.create({
  mainView: {
    fontFamily: 'Geist Sans',
  },
})

export function PDFExport() {
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
              {fields.name.length > 0 && <Text>{fields.name}</Text>}
              {fields.title.length > 0 && <Text>{fields.title}</Text>}
            </View>
          </Page>
        </Document>
      }
    >
      {({ loading, error, url }) => {
        if (loading) {
          return <p className="font-mono text-sm text-slate-500">Preparing your PDF...</p>
        }
        if (error) {
          return <p className="font-mono text-sm text-slate-500">{`Error: ${error.message}`}</p>
        }
        return (
          <a
            className={cn('inline-block', buttonStyles.base, buttonStyles.primary)}
            href={url || ''}
            download="cv.pdf"
          >
            Download PDF
          </a>
        )
      }}
    </BlobProvider>
  )
}
