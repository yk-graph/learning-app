import { create } from 'zustand'

import { Answer } from '@/types'
interface useContentStore {
  categoryId: string | null
  setCategoryId: (value: string) => void
  sectionId: string | null
  setSectionId: (value: string) => void
  issue: {
    title: string
    body: string
    explanation: string
  }
  setTitle: (title: string) => void
  setBody: (body: string) => void
  setExplanation: (explanation: string) => void
  answer1: Answer
  setAnswer1Text: (text: string) => void
  setAnswer1Check: (isCorrect: boolean) => void
  answer2: Answer
  setAnswer2Text: (text: string) => void
  setAnswer2Check: (isCorrect: boolean) => void
  answer3: Answer
  setAnswer3Text: (text: string) => void
  setAnswer3Check: (isCorrect: boolean) => void
  answer4: Answer
  setAnswer4Text: (text: string) => void
  setAnswer4Check: (isCorrect: boolean) => void
}

const useContentStore = create<useContentStore>((set) => ({
  categoryId: null,
  setCategoryId: (categoryId) => set({ categoryId }),
  sectionId: null,
  setSectionId: (sectionId) => set({ sectionId }),
  issue: { title: '', body: '', explanation: '' },
  setTitle: (title) => set((state) => ({ issue: { ...state.issue, title } })),
  setBody: (body) => set((state) => ({ issue: { ...state.issue, body } })),
  setExplanation: (explanation) =>
    set((state) => ({ issue: { ...state.issue, explanation } })),
  answer1: { text: '', isCorrect: false },
  setAnswer1Text: (text) =>
    set((state) => ({ answer1: { ...state.answer1, text } })),
  setAnswer1Check: (isCorrect) =>
    set((state) => ({ answer1: { ...state.answer1, isCorrect } })),
  answer2: { text: '', isCorrect: false },
  setAnswer2Text: (text) =>
    set((state) => ({ answer2: { ...state.answer2, text } })),
  setAnswer2Check: (isCorrect) =>
    set((state) => ({ answer2: { ...state.answer2, isCorrect } })),
  answer3: { text: '', isCorrect: false },
  setAnswer3Text: (text) =>
    set((state) => ({ answer3: { ...state.answer3, text } })),
  setAnswer3Check: (isCorrect) =>
    set((state) => ({ answer3: { ...state.answer3, isCorrect } })),
  answer4: { text: '', isCorrect: false },
  setAnswer4Text: (text) =>
    set((state) => ({ answer4: { ...state.answer4, text } })),
  setAnswer4Check: (isCorrect) =>
    set((state) => ({ answer4: { ...state.answer4, isCorrect } })),
}))

export default useContentStore
