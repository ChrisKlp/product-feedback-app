'use client'

import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import SuggestionsIcon from '@/assets/suggestions/icon-suggestions.svg'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { cn } from '@/utils/utils'
import { useRef, useState } from 'react'
import SortingMenu from '@/components/SortingMenu/SortingMenu'
import { useActiveFilterStore } from '@/hooks/useActiveFilterStore'

type Props = {
  className?: string
  counter: number
}

export default function SortingBar({ className, counter }: Props) {
  const activeFilter = useActiveFilterStore((state) => state.activeFilter)
  const [isOpen, setIsOpen] = useState(false)
  const filterButtonRef = useRef(null)
  const filterMenuRef = useRef(null)

  useOnClickOutside([filterButtonRef, filterMenuRef], () => setIsOpen(false))

  return (
    <div
      className={cn(
        'bg-darkBlue text-blue200 flex h-[56px] items-center px-6 md:h-[72px] md:justify-start md:gap-[38px] md:rounded-[10px]',
        className,
      )}
    >
      <div className="hidden items-center gap-4 md:flex">
        <SuggestionsIcon />
        <span>{`${counter} Suggestions`}</span>
      </div>
      <div className="flex flex-1 items-center gap-1 text-[13px]">
        <span>Sort by : </span>
        <div className="relative">
          <button
            ref={filterButtonRef}
            type="button"
            className="flex items-center gap-2 font-bold"
            onClick={() => setIsOpen(true)}
          >
            <span>{activeFilter}</span>
            <ArrowDown />
          </button>
          {isOpen && (
            <SortingMenu
              activeFilter={activeFilter}
              ref={filterMenuRef}
              onSelect={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
      <button type="button" className="btn h-[40px] px-[16px]">
        + Add Feedback
      </button>
    </div>
  )
}
