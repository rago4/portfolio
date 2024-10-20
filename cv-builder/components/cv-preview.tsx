import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react'

import { Heading } from '@/cv-builder/components/ui/heading'
import { useMainContext } from '@/cv-builder/main-context'

const contactIconMap = {
  dribbble: DribbbleIcon,
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  other: LinkIcon,
  phone: PhoneIcon,
  twitter: TwitterIcon,
}

export function CVPreview() {
  const { fields, contactInfo } = useMainContext()
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
          <p className="leading-relaxed text-slate-600">{fields.summary}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div>
          <Heading>Skills</Heading>
          <ul className="list-inside list-disc leading-relaxed text-slate-600">
            {skills.map((skill, index) => {
              return <li key={`skill-${index}`}>{skill}</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
