import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// 初期化するための処理　https://firebase.google.com/docs/reference/js/app?hl=ja#functions
// getApps()	初期化されたすべてのアプリの (読み取り専用) 配列
// getApp() 	FirebaseAppインスタンスを取得します。引数なしで呼び出すと、デフォルトのアプリが返されます。アプリ名を指定すると、その名前に対応するアプリが返されます。取得中のアプリがまだ初期化されていない場合、例外がスローされます。
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db = getFirestore(app)

// Google認証のための処理
export const gogleProvider = new GoogleAuthProvider()
