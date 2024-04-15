import { cn } from '@/utils/utils'
import ArrowUpIcon from '@/assets/shared/icon-arrow-up.svg'

type Props = {
  value: number
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function UpvoteButton({
  value,
  isActive,
  onClick,
  className,
}: Props) {
  return (
    <button
      className={cn('group', isActive && 'pointer-events-none', className)}
    >
      <span
        className={cn(
          'bg-blue200 group-hover:bg-blue300 rounded-dlg inline-flex h-8 items-center pl-4 pr-3 transition-colors',
          isActive && 'bg-blue500',
        )}
      >
        <span className="flex items-center gap-[10px]">
          <ArrowUpIcon
            className={cn(
              'text-blue500 transition-colors',
              isActive && 'text-white',
            )}
          />
          <span
            className={cn(
              'text-darkBlue800 text-small font-semibold capitalize transition-colors',
              isActive && 'text-white',
            )}
          >
            {value}
          </span>
        </span>
      </span>
    </button>
  )
}
