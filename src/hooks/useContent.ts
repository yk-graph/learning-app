import { create } from 'zustand'

import type { AuthUser } from '@/types'

interface useContentStore {
  categoryId: string | null
  setCategoryId: (value: string) => void
  sectionId: string | null
  setSectionId: (value: string) => void
}

const useContentStore = create<useContentStore>((set) => ({
  categoryId: null,
  setCategoryId: (categoryId) => set({ categoryId }),
  sectionId: null,
  setSectionId: (sectionId) => set({ sectionId }),
}))

export default useContentStore
