import CheckIcon from '@/assets/shared/icon-check.svg'
import { cn } from '@/utils/utils'

type Props = {
  label: string
  isActive?: boolean
  onSelect: () => void
}

export default function SortingMenuItem({
  label,
  onSelect,
  isActive = false,
}: Props) {
  return (
    <button
      type="button"
      className="group flex w-full items-center px-6 py-3 text-left text-darkBlue700"
      onClick={onSelect}
    >
      <span
        className={cn(
          'flex-1 text-base transition-colors group-hover:text-purple',
        )}
      >
        {label}
      </span>
      {isActive && <CheckIcon />}
    </button>
  )
}
