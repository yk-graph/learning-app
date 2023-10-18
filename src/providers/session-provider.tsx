'use client'

import { SessionProvider as Provider } from 'next-auth/react'

interface Props {
  children: React.ReactNode
}

const SessionProvider: React.FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>
}

export default SessionProvider
