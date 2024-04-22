import { SortOption } from '@/types'
import { create } from 'zustand'

const sortOptions = Object.values(SortOption)

type ActiveSortOptionStore = {
  activeSortOption: string
  defaultSortOption: string
  sortOptions: string[]
  setSortOption: (option: string) => void
  resetSortOption: () => void
}

export const useActiveSortOptionStore = create<ActiveSortOptionStore>(
  (set, get) => ({
    activeSortOption: sortOptions[0]!,
    defaultSortOption: sortOptions[0]!,
    sortOptions: [...sortOptions],
    setSortOption: (option) => set({ activeSortOption: option }),
    resetSortOption: () => {
      const defaultSortOption = get().defaultSortOption
      return set({
        activeSortOption: defaultSortOption,
      })
    },
  }),
)
