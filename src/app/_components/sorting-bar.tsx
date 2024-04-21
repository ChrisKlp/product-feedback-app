'use client'

import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import SuggestionsIcon from '@/assets/suggestions/icon-suggestions.svg'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { cn } from '@/utils/utils'
import { useRef, useState } from 'react'
import SortingMenu from '@/components/SortingMenu/SortingMenu'
import { useActiveFilterStore } from '@/hooks/useActiveFilterStore'
import AddFeedbackButton from '@/components/buttons/AddFeedbackButton'

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
        'flex h-[56px] items-center bg-@blue-800 px-6 text-@blue-200 md:h-[72px] md:justify-start md:gap-[38px] md:rounded-[10px]',
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
            className="mr-2 flex items-center gap-2 font-bold"
            onClick={() => setIsOpen(true)}
          >
            <span className="line-clamp-1">{activeFilter}</span>
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
      <AddFeedbackButton className="h-[40px] px-[16px]" />
    </div>
  )
}
