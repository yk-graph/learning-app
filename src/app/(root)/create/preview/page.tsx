'use client'

import Link from 'next/link'
import { addDoc, collection } from 'firebase/firestore'

import { db } from '@/firebase/clientApp'
import { useAuthStore, useContentStore } from '@/hooks'

export default function PreviewPage() {
  const { authUser } = useAuthStore()
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
      .then(() => alert('Issueを追加しました'))
      .catch(() => alert('Issueの追加に失敗しました'))
      .finally(() => {})
  }

  return (
    <div>
      <p>タイトル：{issue.title}</p>
      <p>本文{issue.title}</p>
      <div>
        正解：{answer1.isCorrect ? '○' : '×'}
        正解：{answer2.isCorrect ? '○' : '×'}
        正解：{answer3.isCorrect ? '○' : '×'}
        正解：{answer4.isCorrect ? '○' : '×'}
      </div>
      <div className="flex gap-x-4">
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
