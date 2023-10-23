'use client'

import Link from 'next/link'

import { useContentStore } from '@/hooks'
import { AnswerForm, Editor } from '@/app/(root)/create/_components'

const IssueForm = () => {
  const {
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
    <div className="flex flex-col gap-y-4 mt-8">
      <div>
        <label>Issueタイトル</label>
        <input
          className="h-10 w-full rounded px-4 text-teal-900"
          type="text"
          placeholder="Issueタイトル"
          value={issue.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Issue本文</label>
        <Editor value={issue.body} onChange={(value) => setBody(value)} />
      </div>
      <div>
        <label>Issue回答選択肢</label>
        <div className="flex flex-col gap-y-4">
          <AnswerForm
            answer={answer1}
            setAnswerText={setAnswer1Text}
            setAnswerCheck={setAnswer1Check}
          />
          <AnswerForm
            answer={answer2}
            setAnswerText={setAnswer2Text}
            setAnswerCheck={setAnswer2Check}
          />
          <AnswerForm
            answer={answer3}
            setAnswerText={setAnswer3Text}
            setAnswerCheck={setAnswer3Check}
          />
          <AnswerForm
            answer={answer4}
            setAnswerText={setAnswer4Text}
            setAnswerCheck={setAnswer4Check}
          />
        </div>
      </div>
      <div>
        <label>Issue解説</label>
        <Editor
          value={issue.explanation}
          onChange={(value) => setExplanation(value)}
        />
      </div>
      <button
        className="h-10 w-full border border-solid border-white rounded cursor-pointer"
        disabled={!issue.title || !issue.body}
      >
        <Link href="/create/preview">Previewへ</Link>
      </button>
    </div>
  )
}

export default IssueForm
