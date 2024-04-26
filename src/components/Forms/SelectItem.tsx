import React from 'react'
import * as Select from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import CheckIcon from '@/assets/shared/icon-check.svg'

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

export default SelectItem
