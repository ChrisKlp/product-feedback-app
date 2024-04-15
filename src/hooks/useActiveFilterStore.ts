import { Filter } from '@/types'
import { create } from 'zustand'

const filters = Object.values(Filter)

console.log(filters)

type ActiveFilterStore = {
  activeFilter: Filter
  defaultFilter: Filter
  filters: Filter[]
  setFilter: (filter: Filter) => void
  resetFilter: () => void
}

export const useActiveFilterStore = create<ActiveFilterStore>((set, get) => ({
  activeFilter: filters[0]!,
  defaultFilter: filters[0]!,
  filters: [...filters],
  setFilter: (filter) => set({ activeFilter: filter }),
  resetFilter: () => {
    const defaultFilter = get().defaultFilter
    return set({
      activeFilter: defaultFilter,
    })
  },
}))
