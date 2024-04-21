'use client'

import { forwardRef } from 'react'
import { useActiveFilterStore } from '@/hooks/useActiveFilterStore'
import type { Filter } from '@/types'
import SortingMenuItem from './SortingMenuItem'

type Props = {
  activeFilter: Filter
  onSelect: () => void
}

const SortingMenu = forwardRef<HTMLUListElement, Props>(
  ({ activeFilter, onSelect }, ref) => {
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
  },
)

SortingMenu.displayName = 'SortingMenu'

export default SortingMenu
