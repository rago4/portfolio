import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Rafal Golawski',
  description:
    'Front-end developer with 6+ years of experience. Passionate about coding, fitness, and simplicity. Personal website of Rafal Golawski.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
