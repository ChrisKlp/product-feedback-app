import SuggestionsIcon from '@/assets/suggestions/icon-suggestions.svg'
import AddFeedbackButton from '@/components/AddFeedbackButton/AddFeedbackButton'
import SortingMenu from '@/components/SortingMenu/SortingMenu'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  counter: number
}

export default function SortingBar({ className, counter }: Props) {
  return (
    <div
      className={cn(
        'flex h-[56px] items-center bg-@blue-900 px-6 text-@blue-200 md:h-[72px] md:justify-start md:gap-[38px] md:rounded-[10px]',
        className,
      )}
    >
      <div className="hidden items-center gap-4 md:flex">
        <SuggestionsIcon />
        <span className="font-bold">{`${counter} Suggestions`}</span>
      </div>
      <div className="flex flex-1 items-center gap-1 text-[13px] md:text-[14px]">
        <span>Sort by : </span>
        <SortingMenu />
      </div>
      <AddFeedbackButton className="h-[40px] px-[16px]" />
    </div>
  )
}
