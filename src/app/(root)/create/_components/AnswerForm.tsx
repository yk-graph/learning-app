'use client'

import { Answer } from '@/types'

interface Props {
  answer: Answer
  setAnswerText: (text: string) => void
  setAnswerCheck: (isCorrect: boolean) => void
  disabled: boolean
}

const AnswerForm: React.FC<Props> = ({
  answer,
  setAnswerText,
  setAnswerCheck,
  disabled,
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <input
        className="h-6 w-6 text-teal-900"
        type="checkbox"
        disabled={disabled}
        checked={answer.isCorrect}
        onChange={() => setAnswerCheck(!answer.isCorrect)}
      />
      <textarea
        className="h-10 w-full rounded px-4 pt-2 text-teal-900"
        disabled={disabled}
        placeholder="回答選択肢"
        value={answer.text}
        onChange={(e) => setAnswerText(e.target.value)}
      />
    </div>
  )
}

export default AnswerForm
