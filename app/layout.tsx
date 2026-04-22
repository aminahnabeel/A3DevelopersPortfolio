import type { Metadata } from 'next'
import { Geist_Mono, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sans-family' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono-family' })

export const metadata: Metadata = {
  title: 'A3 Developers - Smart Solutions for Modern Projects',
  description: 'A3 Developers provides expert web development, mobile apps, AI solutions, and more. Affordable, student-friendly, and fast delivery.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${sora.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
