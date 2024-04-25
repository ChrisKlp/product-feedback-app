import { CategoryButtonTag } from '@/components/CategoryTag/CategoryButtonTag'
import { categoryEnum } from '@/db/schema'

type Props = {
  closeMenu: () => void
}

export default function HeaderCategoriesPanel({ closeMenu }: Props) {
  return (
    <div className="flex flex-wrap content-start gap-2 rounded-dlg bg-white p-6">
      {categoryEnum.enumValues.map((category) => (
        <CategoryButtonTag
          key={category}
          name={category}
          defaultCategory={categoryEnum.enumValues[0]}
          className="mb-[6px]"
          onClick={closeMenu}
        />
      ))}
    </div>
  )
}
