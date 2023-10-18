'use client'

import { signOut } from 'next-auth/react'

const Logout = () => {
  return <button onClick={() => signOut()}>ログアウト</button>
}

export default Logout
