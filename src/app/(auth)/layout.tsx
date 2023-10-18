import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import SessionProvider from '@/providers/session-provider'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return <SessionProvider>{children}</SessionProvider>
}
