import SuggestionsIcon from '@/assets/suggestions/icon-suggestions.svg'
import ArrowDown from '@/assets/shared/icon-arrow-down.svg'
import { cn } from '@/utils/utils'
import { Feedback } from '@/types'

type Props = {
  className?: string
  counter: number
}

export default function SortingBar({ className, counter }: Props) {
  return (
    <div
      className={cn(
        'bg-darkBlue text-blue200 flex h-[56px] items-center px-6 md:h-[72px] md:justify-start md:gap-[38px] md:rounded-[10px]',
        className,
      )}
    >
      <div className="hidden items-center gap-4 md:flex">
        <SuggestionsIcon />
        <span>{`${counter} Suggestions`}</span>
      </div>
      <div className="flex flex-1 items-center gap-1 text-[13px]">
        <span>Sort by : </span>
        <button className="flex items-center gap-2 font-bold">
          <span>Most Upvotes</span>
          <ArrowDown />
        </button>
      </div>
      <button className="btn h-[40px] px-[16px]">+ Add Feedback</button>
    </div>
  )
}
