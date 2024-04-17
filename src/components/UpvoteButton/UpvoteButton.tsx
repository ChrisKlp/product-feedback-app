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
      className={cn(
        'group/upvote',
        className,
        isActive && 'pointer-events-none',
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <span
        className={cn(
          'flex h-8 items-center rounded-dlg bg-blue200 pl-4 pr-3 transition-colors group-hover/upvote:bg-blue300 @xl/card:h-[53px] @xl/card:w-10 @xl/card:items-start @xl/card:justify-center @xl/card:p-0 @xl/card:pt-[14px]',
          isActive && 'bg-blue500',
        )}
      >
        <span className="flex items-center gap-[10px] @xl/card:flex-col @xl/card:gap-[6px]">
          <ArrowUpIcon
            className={cn(
              'text-blue500 transition-colors',
              isActive && 'text-white',
            )}
          />
          <span
            className={cn(
              'text-[13px] font-semibold capitalize text-darkBlue800 transition-colors',
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
