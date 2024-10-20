import {
  BlobProvider,
  Document,
  Font,
  Image as PdfImage,
  Link,
  Page,
  Styles,
  Text,
  View,
} from '@react-pdf/renderer'

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

const slate600 = '#475569'

/**
 * Due to react-pdf's limited SVG support, new icons should be added as follows:
 * 1. Visit https://lucide.dev/icons/
 * 2. Download the desired icon as a PNG file
 * 3. Add the PNG file to the public/png-icons directory
 * 4. Update this map with the new icon information
 */
const pngIconMap = {
  dribbble: '/png-icons/dribbble.png',
  email: '/png-icons/mail.png',
  github: '/png-icons/github.png',
  linkedin: '/png-icons/linkedin.png',
  other: '/png-icons/link.png',
  phone: '/png-icons/phone.png',
  twitter: '/png-icons/twitter.png',
}

const styles: Styles = {
  // shared
  section: {
    marginBottom: 24,
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
  title: {
    color: slate600,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  contactIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
  },
  contactLink: {
    color: slate600,
    marginLeft: 6,
  },
}

export function PdfExport() {
  const { documentStatus, setDocumentStatus, fields, contactInfo } = useMainContext()
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
                <Text style={styles.title}>{fields.title}</Text>
              </View>
              <View style={styles.section}>
                {contactInfo.map((info) => {
                  let linkSrc = info.value
                  if (info.type === 'email') linkSrc = `mailto:${info.value}`
                  if (info.type === 'phone') linkSrc = `tel:${info.value}`
                  return (
                    <View style={styles.contactItem} key={info.id}>
                      <PdfImage style={styles.contactIcon} src={pngIconMap[info.type]} />
                      <Link style={styles.contactLink} src={linkSrc}>
                        {info.value}
                      </Link>
                    </View>
                  )
                })}
              </View>
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
