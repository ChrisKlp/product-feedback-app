import { type Status } from '@/types'
import { cn, getStatusData } from '@/utils/utils'

type Props = {
  status: Status
  counter: number
  isActive?: boolean
  onClick: () => void
}

export default function RoadmapMobileTabsItem({
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
          'w-full text-center text-[13px] font-bold text-@blue-900 opacity-40 transition-opacity group-hover/tabs:opacity-100',
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
