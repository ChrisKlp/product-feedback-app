import { Status } from '@/types'
import { cn, getStatusData } from '@/utils/utils'

type Props = {
  status: Status
  counter: number
  isActive?: boolean
  onClick: () => void
}

export default function RoadmapTabsItem({
  counter,
  status,
  isActive = false,
  onClick,
}: Props) {
  const currentStatus = getStatusData(status)
  return (
    <button className="group/tabs relative grid items-center" onClick={onClick}>
      <span
        className={cn(
          'text-darkBlue800 w-full text-center text-[13px] font-bold opacity-40',
          isActive && 'opacity-100',
        )}
      >{`${currentStatus?.name} (${counter})`}</span>
      <span
        className={cn(
          'absolute bottom-0 h-1 w-full opacity-0',
          isActive && 'opacity-100',
        )}
        style={{ backgroundColor: currentStatus?.color }}
      />
    </button>
  )
}
