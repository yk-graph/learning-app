import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { Logout } from '@/components'
import SessionProvider from '@/providers/session-provider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <SessionProvider>
      <header>
        <Logout />
      </header>
      {children}
    </SessionProvider>
  )
}
