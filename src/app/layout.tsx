import '@/styles/globals.css'
import { cn } from '@/utils/utils'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Product Feedback App',
  description: 'Frontend Mentor | Product feedback app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(jost.className)}>{children}</body>
    </html>
  )
}
