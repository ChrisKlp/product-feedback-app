'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import CheckIcon from '@/assets/shared/icon-check.svg'
import { cn } from '@/lib/utils'
import { useActiveSortOptionStore } from '@/hooks/useActiveSortOptionStore'

export default function SortingMenu() {
  const sortOptions = useActiveSortOptionStore((state) => state.sortOptions)
  const defaultSortOption = useActiveSortOptionStore(
    (state) => state.defaultSortOption,
  )
  const setSortOption = useActiveSortOptionStore((state) => state.setSortOption)

  return (
    <Select.Root
      defaultValue={defaultSortOption}
      onValueChange={(value) => setSortOption(value)}
    >
      <Select.Trigger
        className="mr-2 flex h-[20px] w-fit items-center gap-2 text-[13px] font-bold text-@blue-200 outline-none focus:ring-1 focus:ring-@blue-500 md:text-[14px] [&>span]:line-clamp-1"
        aria-label="Sort by"
      >
        <Select.Value />
        <Select.Icon className="text-@blue-200">
          <ArrowDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          sideOffset={42}
          position="popper"
          className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-3 relative z-50 w-full max-w-[255px] overflow-hidden rounded-[10px] bg-white shadow-blue"
        >
          <Select.Viewport className="w-[255px]">
            {sortOptions.map((option, index, array) => (
              <SelectItem
                key={option}
                value={option}
                isLast={index === array.length - 1}
              >
                {option}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item> & {
    isLast?: boolean
  }
>(({ children, className, isLast, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        'relative flex h-12 cursor-pointer select-none items-center px-6 text-[16px] capitalize text-@gray data-[disabled]:pointer-events-none data-[highlighted]:text-@purple-500 data-[highlighted]:outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute right-6 inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
      {!isLast && (
        <Select.Separator className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-@blue-800 opacity-15" />
      )}
    </Select.Item>
  )
})

SelectItem.displayName = Select.Item.displayName
