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
import { formatDate, str2arr } from '@/resume-builder/utils'

const contactIconMap = {
  dribbble: DribbbleIcon,
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  other: LinkIcon,
  phone: PhoneIcon,
  twitter: TwitterIcon,
}

export function ResumePreview() {
  const { fields, contactInfo, experienceInfo, educationInfo } = useMainContext()
  const skills = str2arr(fields.skills, ',')
  return (
    <div className="space-y-5 rounded-lg bg-white p-6 shadow-lg">
      <div>
        {fields.name.length > 0 && <p className="text-3xl font-bold">{fields.name}</p>}
        {fields.title.length > 0 && <p className="text-slate-600">{fields.title}</p>}
      </div>
      {contactInfo.length > 0 && (
        <ul className="space-y-1 text-slate-600">
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
        <div className="space-y-2">
          <Heading>Summary</Heading>
          <p className="text-slate-600">{fields.summary}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div className="space-y-2">
          <Heading>Skills</Heading>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => {
              return (
                <li
                  key={`skill-${index}`}
                  className="rounded-full bg-slate-100 px-2.5 py-1.5 text-xs font-semibold"
                >
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {experienceInfo.length > 0 && (
        <div className="space-y-2">
          <Heading>Work Experience</Heading>
          <div className="space-y-4">
            {experienceInfo.map((info) => {
              const description = info.description.includes(';')
                ? str2arr(info.description)
                : info.description
              return (
                <div key={info.id}>
                  <p className="font-semibold">{`${info.position} - ${info.company}`}</p>
                  <p className="mb-1 text-slate-600">
                    {`${formatDate(info.startDate)} - ${info.endDate ? formatDate(info.endDate) : 'Present'}`}
                  </p>
                  {typeof description === 'string' ? (
                    <p className="text-slate-600">{info.description}</p>
                  ) : (
                    <ul className="list-inside list-disc text-slate-600">
                      {description.map((item, index) => {
                        return (
                          <li key={`experience-${info.id}-description-item-${index}`}>{item}</li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
      {educationInfo.length > 0 && (
        <div className="space-y-2">
          <Heading>Education</Heading>
          <div className="space-y-4">
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
