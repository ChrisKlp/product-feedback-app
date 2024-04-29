import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'

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
    <ClerkProvider>
      <html lang="en">
        <body className={cn(jost.className)}>
          <Toaster position="top-center" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
