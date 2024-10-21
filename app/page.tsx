import {
  FileUserIcon,
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  other: LinkIcon,
  resume: FileUserIcon,
  twitter: TwitterIcon,
}

const sectionStyles = 'flex flex-col flex-wrap justify-center gap-2 md:flex-row'

function LinkButton({
  variant,
  href,
  label,
}: {
  variant: keyof typeof iconMap
  href: string
  label: string
}) {
  const Icon = iconMap[variant]
  const internal = href.startsWith('/')
  const LinkComponent = internal ? Link : 'a'
  const linkProps =
    !internal && variant !== 'mail' ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <LinkComponent
      className="inline-flex items-center justify-center space-x-1.5 rounded-lg border border-neutral-700 bg-gradient-to-b from-white/15 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-white/10 transition-all hover:-translate-y-[2px] hover:border-neutral-500"
      href={href}
      {...linkProps}
    >
      <Icon size={16} />
      <span>{label}</span>
    </LinkComponent>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 p-5 font-geist-mono lowercase text-white">
      <div className="max-w-xl text-balance text-center">
        <h1 className="text-2xl font-bold">Rafal Golawski</h1>
        <p className="mt-2 text-sm leading-relaxed text-neutral-100">
          TLDR: Front-end developer with over 6 years of experience. Lifting weights three times a
          week, zone 2 running once a week, coding at 9-5. Simplicity over complexity.
        </p>
        <div className="mb-6 mt-5 flex items-center space-x-4">
          <div className="relative h-[2px] w-full rounded-full bg-pink-500">
            <div className="absolute -inset-0.5 animate-flicker bg-gradient-to-r from-fuchsia-500 to-pink-500 blur" />
          </div>
          <p className="whitespace-nowrap text-sm text-neutral-100">Reach out</p>
          <div className="relative h-[2px] w-full rounded-full bg-pink-500">
            <div className="absolute -inset-0.5 animate-flicker bg-gradient-to-r from-pink-500 to-fuchsia-500 blur" />
          </div>
        </div>
        <section className={sectionStyles}>
          <LinkButton variant="github" href="https://github.com/rago4" label="rago4" />
          <LinkButton
            variant="linkedin"
            href="https://linkedin.com/in/rgolawski"
            label="rgolawski"
          />
          <LinkButton variant="twitter" href="https://twitter.com/rgolawski" label="rgolawski" />
          <LinkButton variant="other" href="https://dev.to/rgolawski" label="dev.to/rgolawski" />
          <LinkButton
            variant="mail"
            href="mailto:rafal.j.golawski@gmail.com"
            label="rafal.j.golawski@gmail.com"
          />
        </section>
        <p className="my-6 text-sm text-neutral-100">Or check out my recent projects</p>
        <section className={sectionStyles}>
          <LinkButton variant="resume" href="/resume-builder" label="Resume Builder" />
        </section>
      </div>
    </main>
  )
}
