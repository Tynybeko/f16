import { create } from 'zustand'

const useProfile = create((set) => ({
  data: null,
  logout: () => set(() => ({ data: null })),
  setProfile: (newProfile) => set((state) => ({ data: newProfile })),
}))


export default useProfile