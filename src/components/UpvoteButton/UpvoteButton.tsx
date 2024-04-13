import { cn } from '@/utils/utils'
import ArrowUpIcon from '@/assets/shared/icon-arrow-up.svg'

type Props = {
  value: number
  isActive?: boolean
  onClick?: () => void
}

export default function UpvoteButton({ value, isActive, onClick }: Props) {
  return (
    <button className={cn('group', isActive && 'pointer-events-none')}>
      <span
        className={cn(
          'bg-blue200 group-hover:bg-blue300 inline-flex h-[32px] items-center rounded-[10px] pl-4 pr-3 transition-colors',
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
