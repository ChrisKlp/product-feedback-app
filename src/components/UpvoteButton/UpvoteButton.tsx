import { cn } from '@/utils/utils'
import ArrowUpIcon from '@/assets/shared/icon-arrow-up.svg'

type Props = {
  value: number
  isActive?: boolean
  onClick: () => void
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
      type="button"
      className={cn('group', isActive && 'pointer-events-none', className)}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <span
        className={cn(
          'bg-blue200 group-hover:bg-blue300 rounded-dlg @xl/card:h-[53px] @xl/card:w-10 @xl/card:items-start @xl/card:justify-center @xl/card:p-0 @xl/card:pt-[14px] flex h-8 items-center pl-4 pr-3 transition-colors',
          isActive && 'bg-blue500',
        )}
      >
        <span className="@xl/card:flex-col @xl/card:gap-[6px] flex items-center gap-[10px]">
          <ArrowUpIcon
            className={cn(
              'text-blue500 transition-colors',
              isActive && 'text-white',
            )}
          />
          <span
            className={cn(
              'text-darkBlue800 text-[13px] font-semibold capitalize transition-colors',
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
