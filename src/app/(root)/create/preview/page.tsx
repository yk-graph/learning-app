'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { addDoc, collection } from 'firebase/firestore'

import { db } from '@/firebase/clientApp'
import { useAuthStore, useContentStore } from '@/hooks'
import { Preview } from '@/app/(root)/create/_components'

export default function PreviewPage() {
  const { authUser } = useAuthStore()
  const router = useRouter()
  const { categoryId, sectionId, issue, answer1, answer2, answer3, answer4 } =
    useContentStore()

  const handleSubmitAddIssue = async () => {
    await addDoc(
      collection(
        db,
        `users/${authUser?.uid}/categories/${categoryId}/sections/${sectionId}/issues`
      ),
      {
        title: issue.title,
        body: issue.body,
        answers: [answer1, answer2, answer3, answer4],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    )
      .then(() => {
        alert('Issueを追加しました')
        router.push('/')
      })
      .catch(() => alert('Issueの追加に失敗しました'))
      .finally(() => {})
  }

  return (
    <div className="flex flex-col gap-x-8">
      <div className="py-4 border-b border-b-slate-500">
        <h2 className="mb-2">タイトル</h2>
        <p>{issue.title}</p>
      </div>
      <div className="py-4">
        <h2 className="mb-2">問題本文</h2>
        <div className="border border-slate-500 rounded-md">
          <Preview value={issue.body} />
        </div>
      </div>
      <div className="py-4 border-b border-b-slate-500">
        <h2 className="mb-2">正解</h2>
        <div className="flex gap-x-8">
          {answer1.isCorrect && answer1.text}
          {answer2.isCorrect && answer2.text}
          {answer3.isCorrect && answer3.text}
          {answer4.isCorrect && answer4.text}
        </div>
      </div>
      <div className="py-4">
        <h2 className="mb-2">解説</h2>
        <div className="border border-slate-500 rounded-md">
          <Preview value={issue.explanation} />
        </div>
      </div>
      <div className="flex gap-x-4 mt-8">
        <button className="h-10 w-1/2 border border-solid border-white rounded cursor-pointer">
          <Link href="/create">back</Link>
        </button>
        <button
          className="h-10 w-1/2 border border-solid border-white rounded cursor-pointer"
          onClick={handleSubmitAddIssue}
        >
          create
        </button>
      </div>
    </div>
  )
}
