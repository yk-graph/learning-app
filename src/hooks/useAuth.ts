import { create } from 'zustand'

import type { AuthUser } from '@/types'

interface useAuthStore {
  authUser: AuthUser | null
  setAuthUser: (authUser: AuthUser) => void
}

const useAuthStore = create<useAuthStore>((set) => ({
  authUser: null,
  setAuthUser: (authUser) => set({ authUser }),
}))

export default useAuthStore
