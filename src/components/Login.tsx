'use client'

import { useRouter } from 'next/navigation'
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'

import { auth, gogleProvider } from '@/firebase/clientApp'
import { useAuthStore } from '@/hooks'

const Login = () => {
  const router = useRouter()
  const { setAuthUser } = useAuthStore()

  const signInGoogle = async () => {
    await signInWithPopup(auth, gogleProvider)
      .then((result) => {
        // Google Access Tokenが取得できます。これを使用して Google API にアクセスすることができます
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential && credential.accessToken

        // サインインしたユーザー情報
        const user: User = result.user

        setAuthUser({
          uid: user.uid,
          displayName: user.displayName!,
          photoURL: user.photoURL!,
          email: user.email!,
        })

        router.push('/')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div>
      <div onClick={signInGoogle}>Googleでログイン</div>
    </div>
  )
}

export default Login
