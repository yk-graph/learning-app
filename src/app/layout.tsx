import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { AuthProvider } from '@/providers/AuthProvider'

export const metadata = {
  title: 'LearningApp',
  description: 'Create Your Knowledge and Learn Anything!',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
