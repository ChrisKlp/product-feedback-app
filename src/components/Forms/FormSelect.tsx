import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import * as Select from '@radix-ui/react-select'

type Props = {
  onValueChange: (value: string) => void
  defaultValue?: string
  children: React.ReactNode
}

export default function FormSelect({
  onValueChange,
  defaultValue,
  children,
}: Props) {
  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <Select.Trigger className="flex h-12 items-center justify-between rounded-[5px] bg-@blue-100 px-6 text-[15px] text-@blue-800 placeholder-@blue-800 placeholder-opacity-50 transition-shadow hover:ring-1 hover:ring-@blue-500 focus:outline-none focus:ring-1 focus:ring-@blue-500">
        <Select.Value />
        <Select.Icon className="text-@blue-500">
          <ArrowDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          sideOffset={16}
          position="popper"
          className="relative z-50 w-full min-w-[8rem] overflow-hidden rounded-[10px] bg-white shadow-blue data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-3"
        >
          <Select.Viewport className="w-[var(--radix-select-trigger-width)]">
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
