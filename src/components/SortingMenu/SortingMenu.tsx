'use client'

import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import routes from '@/lib/routes'
import { SortOption } from '@/types'
import * as Select from '@radix-ui/react-select'
import { useRouter, useSearchParams } from 'next/navigation'
import SelectItem from '@/components/Forms/SelectItem'

export default function SortingMenu() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initSortParam = searchParams.get('sort')

  const sortOptions = Object.values(SortOption)
  const defaultValue = initSortParam ?? SortOption.MOST_UPVOTES

  const handleValueChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('sort', value)
    router.push(`${routes.home}?${newParams.toString()}`)
  }

  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={(value) => handleValueChange(value)}
    >
      <Select.Trigger
        className="mr-2 flex h-[20px] w-fit items-center gap-2 text-xs font-bold capitalize text-@blue-200 outline-none focus:ring-1 focus:ring-@blue-500 md:text-[14px] [&>span]:line-clamp-1"
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
          className="relative z-50 w-full max-w-[255px] overflow-hidden rounded-[10px] bg-white shadow-blue data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-3"
        >
          <Select.Viewport className="w-[255px]">
            {sortOptions.map((option, index, array) => (
              <SelectItem
                key={option}
                value={option}
                isLast={index === array.length - 1}
              >
                {option.replace('-', ' ')}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
