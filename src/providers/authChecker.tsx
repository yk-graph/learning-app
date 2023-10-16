/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { auth } from '@/firebase/clientApp'
import { useStoreModal } from '@/hooks'

interface Props {
  children: ReactNode
}

export const AuthChecker: FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()

  const { setAuthUser } = useStoreModal()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser({
          uid: user.uid,
          displayName: user.displayName!,
          photoURL: user.photoURL!,
          email: user.email!,
        })

        if (pathname === '/login') {
          router.back()
        }
      } else {
        router.push('/login')
      }
    })
    return () => unSub()
  }, [])

  if (!isMounted) return null

  return <>{children}</>
}
