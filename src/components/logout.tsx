'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

import { auth } from '@/firebase/clientApp'

export const Logout = () => {
  const router = useRouter()

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        router.push('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return <div onClick={logout}>ログアウト</div>
}
