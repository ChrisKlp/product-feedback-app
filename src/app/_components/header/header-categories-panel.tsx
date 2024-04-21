import { CategoryButtonTag } from '@/components/CategoryTag/CategoryTag'
import { useActiveCategoryStore } from '@/hooks/useActiveCategoryStore'

export default function HeaderCategoriesPanel() {
  const activeCategory = useActiveCategoryStore((state) => state.activeCategory)
  const categories = useActiveCategoryStore((state) => state.categories)
  const setCategory = useActiveCategoryStore((state) => state.setCategory)
  return (
    <div className="flex flex-wrap content-start gap-2 rounded-dlg bg-white p-6">
      {categories.map((category) => (
        <CategoryButtonTag
          key={category}
          name={category}
          isSelected={category === activeCategory}
          className="mb-[6px]"
          onSelected={() => setCategory(category)}
        />
      ))}
    </div>
  )
}
