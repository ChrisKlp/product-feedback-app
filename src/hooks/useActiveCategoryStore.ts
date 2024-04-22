import { categories } from '@/lib/categories'
import { create } from 'zustand'

type ActiveCategoryStore = {
  activeCategory: string
  defaultCategory: string
  categories: string[]
  setCategory: (category: string) => void
  resetCategory: () => void
}

export const useActiveCategoryStore = create<ActiveCategoryStore>(
  (set, get) => ({
    activeCategory: categories[0]!,
    defaultCategory: categories[0]!,
    categories: [...categories],
    setCategory: (category) => set({ activeCategory: category }),
    resetCategory: () => {
      const defaultCategory = get().defaultCategory
      return set({
        activeCategory: defaultCategory,
      })
    },
  }),
)
