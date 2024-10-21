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
import { cn, formatDate, str2arr } from '@/resume-builder/utils'

Font.register({
  family: 'Geist Sans',
  fonts: [
    { src: '/fonts/Geist-Regular.otf', fontWeight: 400 },
    { src: '/fonts/Geist-SemiBold.otf', fontWeight: 500 },
    { src: '/fonts/Geist-Bold.otf', fontWeight: 700 },
  ],
})

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

const slate = {
  '600': '#475569',
  '900': '#0f172a',
}

const styles: Styles = {
  // shared
  section: {
    marginBottom: 17.5,
  },
  sectionHeading: {
    fontSize: 15.75,
    fontWeight: 700,
    marginBottom: 7,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: 1.3125,
    color: slate['600'],
  },
  listBull: {
    marginRight: 14,
  },
  subSection: {
    marginBottom: 14,
  },
  subSectionHeading: {
    fontWeight: 500,
    color: slate['900'],
    marginBottom: 1.75,
  },
  subSectionText: {
    color: slate['600'],
    lineHeight: 1.3125,
  },
  // components
  mainView: {
    fontFamily: 'Geist Sans',
    fontSize: 14,
    fontWeight: 400,
    color: slate['900'],
    padding: 28,
  },
  name: {
    fontSize: 26.25,
    fontWeight: 700,
  },
  title: {
    color: slate['600'],
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    color: slate['600'],
    lineHeight: 1.3125,
    marginBottom: 3.5,
  },
  contactIcon: {
    width: 14,
    height: 14,
    objectFit: 'contain',
  },
  contactLink: {
    marginLeft: 5.25,
    color: slate['600'],
  },
  summary: {
    color: slate['600'],
    lineHeight: 1.3125,
  },
  experienceDate: {
    color: slate['600'],
    marginBottom: 3.5,
  },
  consent: {
    fontSize: 10.5,
    color: slate['900'],
  },
}

export function PdfExport() {
  const { documentStatus, setDocumentStatus, fields, contactInfo, experienceInfo, educationInfo } =
    useMainContext()
  const skills = str2arr(fields.skills)
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
              {contactInfo.length > 0 && (
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
              )}
              {fields.summary.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Summary</Text>
                  <Text style={styles.summary}>{fields.summary}</Text>
                </View>
              )}
              {skills.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Skills</Text>
                  <View>
                    {skills.map((skill, index) => {
                      return (
                        <View key={`skill-${index}`} style={styles.listItem}>
                          <Text style={styles.listBull}>&bull;</Text>
                          <Text>{skill}</Text>
                        </View>
                      )
                    })}
                  </View>
                </View>
              )}
              {experienceInfo.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Work Experience</Text>
                  {experienceInfo.map((info, index) => {
                    const last = index === experienceInfo.length - 1
                    const description = info.description.includes(';')
                      ? str2arr(info.description)
                      : info.description
                    return (
                      <View key={info.id} style={last ? undefined : styles.subSection}>
                        <Text style={styles.subSectionHeading}>
                          {`${info.position} - ${info.company}`}
                        </Text>
                        <Text style={styles.experienceDate}>
                          {`${formatDate(info.startDate)} - ${info.endDate ? formatDate(info.endDate) : 'Present'}`}
                        </Text>
                        {typeof description === 'string' ? (
                          <Text style={styles.subSectionText}>{info.description}</Text>
                        ) : (
                          description.map((item, index) => {
                            return (
                              <View
                                key={`experience-${info.id}-description-${index}`}
                                style={styles.listItem}
                              >
                                <Text style={styles.listBull}>&bull;</Text>
                                <Text>{item}</Text>
                              </View>
                            )
                          })
                        )}
                      </View>
                    )
                  })}
                </View>
              )}
              {educationInfo.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionHeading}>Education</Text>
                  {educationInfo.map((info, index) => {
                    const last = index === experienceInfo.length - 1
                    return (
                      <View key={info.id} style={last ? undefined : styles.subSection}>
                        <Text style={styles.subSectionHeading}>{info.degree}</Text>
                        <Text style={styles.subSectionText}>
                          {`${info.institution}, ${info.startYear} - ${info.endYear || 'Present'}`}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              )}
              {fields.consent.length > 0 && (
                <View>
                  <Text style={styles.consent}>{fields.consent}</Text>
                </View>
              )}
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
