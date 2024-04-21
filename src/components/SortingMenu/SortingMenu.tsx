'use client'

import { type ForwardedRef, forwardRef } from 'react'
import SortingMenuItem from './SortingMenuItem'
import { useActiveFilterStore } from '@/hooks/useActiveFilterStore'
import type { Filter } from '@/types'

type Ref = ForwardedRef<HTMLUListElement>
type Props = {
  activeFilter: Filter
  onSelect: () => void
}

function SortingMenu({ activeFilter, onSelect }: Props, ref: Ref) {
  const filters = useActiveFilterStore((state) => state.filters)
  const setFilter = useActiveFilterStore((state) => state.setFilter)

  const handleSelect = (filter: Filter) => {
    setFilter(filter)
    onSelect()
  }

  return (
    <ul
      ref={ref}
      className="absolute left-0 top-[52px] z-50 grid w-[255px] rounded-[10px] bg-white shadow-blue md:top-[62px]"
    >
      {filters.map((filter, i, arr) => (
        <li key={filter}>
          <SortingMenuItem
            label={filter}
            onSelect={() => handleSelect(filter)}
            isActive={activeFilter === filter}
          />
          {i < arr.length - 1 && (
            <span className="block h-[1px] w-full bg-@blue-900 opacity-15" />
          )}
        </li>
      ))}
    </ul>
  )
}

export default forwardRef(SortingMenu)
