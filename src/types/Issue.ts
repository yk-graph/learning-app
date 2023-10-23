import Answer from './Answer'

type Issue = {
  id: string
  issue: {
    title: string
    body: string
    explanation: string
  }
  answers1: Answer
  answers2: Answer
  answers3: Answer
  answers4: Answer
  createdAt: string
  updatedAt: string
}

export default Issue
