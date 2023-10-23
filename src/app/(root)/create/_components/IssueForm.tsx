'use client'

import Link from 'next/link'

import { useContentStore } from '@/hooks'
import AnswerForm from './AnswerForm'

const IssueForm = () => {
  const {
    categoryId,
    sectionId,
    issue,
    answer1,
    answer2,
    answer3,
    answer4,
    setTitle,
    setBody,
    setExplanation,
    setAnswer1Text,
    setAnswer1Check,
    setAnswer2Text,
    setAnswer2Check,
    setAnswer3Text,
    setAnswer3Check,
    setAnswer4Text,
    setAnswer4Check,
  } = useContentStore()

  return (
    <div className="mt-8 border-b border-b-slate-500">
      <div className="mb-8">
        <h2>Issue作成</h2>
        <div className="flex flex-col gap-y-4">
          <input
            className="h-10 w-full rounded px-4 text-teal-900"
            type="text"
            disabled={!categoryId || !sectionId}
            placeholder="Issueタイトル"
            value={issue.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="h-20 w-full rounded px-4 pt-2 text-teal-900"
            disabled={!categoryId || !sectionId}
            placeholder="Issue本文"
            value={issue.body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className="flex flex-col gap-y-4">
            <AnswerForm
              answer={answer1}
              setAnswerText={setAnswer1Text}
              setAnswerCheck={setAnswer1Check}
              disabled={!categoryId || !sectionId}
            />
            <AnswerForm
              answer={answer2}
              setAnswerText={setAnswer2Text}
              setAnswerCheck={setAnswer2Check}
              disabled={!categoryId || !sectionId}
            />
            <AnswerForm
              answer={answer3}
              setAnswerText={setAnswer3Text}
              setAnswerCheck={setAnswer3Check}
              disabled={!categoryId || !sectionId}
            />
            <AnswerForm
              answer={answer4}
              setAnswerText={setAnswer4Text}
              setAnswerCheck={setAnswer4Check}
              disabled={!categoryId || !sectionId}
            />
          </div>
          <textarea
            className="h-20 w-full rounded px-4 pt-2 text-teal-900"
            disabled={!categoryId || !sectionId}
            placeholder="Issue解説"
            value={issue.explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
          <button
            className="h-10 w-full border border-solid border-white rounded cursor-pointer"
            disabled={!issue.title || !issue.body}
          >
            <Link href="/create/preview">Previewへ</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IssueForm
