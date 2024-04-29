import { cn } from '@/lib/utils'
import ArrowUpIcon from '@/assets/shared/icon-arrow-up.svg'
import type { TFeedback } from '@/types'

export type UpvoteButtonProps = {
  data: TFeedback
  isActive?: boolean
  withStatus?: boolean
  className?: string
  onClick?: () => void
}

export default function UpvoteButton({
  data,
  isActive = false,
  withStatus = false,
  className,
  onClick,
}: UpvoteButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'group/upvote',
        className,
        isActive && 'pointer-events-none',
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          // default styles
          'flex h-8 items-center rounded-dlg bg-@blue-200 pl-4 pr-3 transition-colors group-hover/upvote:bg-@blue-300',
          // optional styles
          !withStatus
            ? 'md:h-[53px] md:w-10 md:items-start md:justify-center md:p-0 md:pt-[14px]'
            : 'lg:h-10 lg:w-[69px]',
          // active styles
          isActive && 'bg-@blue-500',
        )}
      >
        <span
          className={cn(
            // default styles
            'flex items-center gap-[10px]',
            // without status styles
            !withStatus && 'md:flex-col md:gap-[6px]',
          )}
        >
          <ArrowUpIcon
            className={cn(
              'text-@blue-500 transition-colors',
              isActive && 'text-white',
            )}
          />
          <span
            className={cn(
              'text-xs font-semibold capitalize text-@blue-800 transition-colors',
              isActive && 'text-white',
            )}
          >
            {data.upvotes}
          </span>
        </span>
      </span>
    </button>
  )
}
