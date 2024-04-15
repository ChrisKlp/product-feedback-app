import { categories } from '@/utils/categories'
import { create } from 'zustand'

type ActiveCategoryStore = {
  activeCategory: string
  defaultCategory: string
  allCategories: string[]
  setCategory: (category: string) => void
  resetCategory: () => void
}

export const useActiveCategoryStore = create<ActiveCategoryStore>(
  (set, get) => ({
    activeCategory: categories[0]!,
    defaultCategory: categories[0]!,
    allCategories: [...categories],
    setCategory: (category) => set({ activeCategory: category }),
    resetCategory: () => {
      const defaultCategory = get().allCategories[0]
      return set({
        activeCategory: defaultCategory,
      })
    },
  }),
)
