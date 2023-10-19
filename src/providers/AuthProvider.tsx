'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { auth } from '@/firebase/clientApp'
import { useAuthStore } from '@/hooks'
import { Loading } from '@/components'

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { authUser, setAuthUser } = useAuthStore()

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
      } else {
        router.push('/login')
      }

      if (user && pathname === '/login') router.push('/')
    })
    return () => unSub()
  }, [])

  // 未ログイン時で、かつ/loginページでない場合は遷移が完了するまでローディングを表示
  if (!isMounted || (!authUser && pathname !== '/login')) return <Loading />

  return <>{children}</>
}
