import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react'

import { Heading } from '@/resume-builder/components/ui/heading'
import { useMainContext } from '@/resume-builder/main-context'

const contactIconMap = {
  dribbble: DribbbleIcon,
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  other: LinkIcon,
  phone: PhoneIcon,
  twitter: TwitterIcon,
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export function ResumePreview() {
  const { fields, contactInfo, experienceInfo, educationInfo } = useMainContext()
  const skills = fields.skills.length > 0 ? fields.skills.split(';') : []
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {fields.name.length > 0 && <p className="text-3xl font-bold">{fields.name}</p>}
      {fields.title.length > 0 && <p className="text-slate-600">{fields.title}</p>}
      {contactInfo.length > 0 && (
        <ul className="text-slate-600">
          {contactInfo.map((info) => {
            const Icon = contactIconMap[info.type]
            let linkProps: JSX.IntrinsicElements['a'] = {
              href: info.value,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
            if (info.type === 'email') linkProps = { href: `mailto:${info.value}` }
            if (info.type === 'phone') linkProps = { href: `tel:${info.value}` }
            return (
              <li key={info.id} className="flex items-center space-x-1.5">
                <Icon size={16} />
                <a className="underline" {...linkProps}>
                  {info.value}
                </a>
              </li>
            )
          })}
        </ul>
      )}
      {fields.summary.length > 0 && (
        <div>
          <Heading>Summary</Heading>
          <p className="text-slate-600">{fields.summary}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <Heading>Skills</Heading>
          <ul className="list-inside list-disc text-slate-600">
            {skills.map((skill, index) => {
              return <li key={`skill-${index}`}>{skill}</li>
            })}
          </ul>
        </div>
      )}
      {experienceInfo.length > 0 && (
        <div>
          <Heading>Work Experience</Heading>
          {experienceInfo.map((info) => {
            const description = info.description.includes(';')
              ? info.description.split(';')
              : info.description
            return (
              <div key={info.id}>
                <p className="font-semibold">{`${info.position} - ${info.company}`}</p>
                <p className="text-slate-600">
                  {`${formatDate(info.startDate)} - ${info.endDate ? formatDate(info.endDate) : 'Present'}`}
                </p>
                {typeof description === 'string' ? (
                  <p className="text-slate-600">{info.description}</p>
                ) : (
                  <ul className="list-inside list-disc text-slate-600">
                    {description.map((item, index) => {
                      return <li key={`experience-${info.id}-description-item-${index}`}>{item}</li>
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      )}
      {educationInfo.length > 0 && (
        <div>
          <Heading>Education</Heading>
          <div>
            {educationInfo.map((info) => {
              return (
                <div key={info.id}>
                  <p className="font-semibold">{info.degree}</p>
                  <p className="text-slate-600">{`${info.institution}, ${info.startYear} - ${info.endYear ? info.endYear : 'Present'}`}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {fields.consent.length > 0 && <p className="text-xs">{fields.consent}</p>}
    </div>
  )
}
