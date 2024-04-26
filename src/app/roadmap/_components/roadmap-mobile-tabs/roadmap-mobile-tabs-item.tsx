import { cn } from '@/lib/utils'
import type { ClientStatusData } from '@/types'

type Props = {
  status: ClientStatusData
  isActive?: boolean
  onClick: () => void
}

export default function RoadmapMobileTabsItem({
  status,
  isActive = false,
  onClick,
}: Props) {
  return (
    <button className="group/tabs relative grid items-center" onClick={onClick}>
      <span
        className={cn(
          'w-full text-center text-xs font-bold text-@blue-800 opacity-40 transition-opacity group-hover/tabs:opacity-100',
          isActive && 'opacity-100',
        )}
      >{`${status.name} (${status.count})`}</span>
      <span
        className={cn(
          'absolute bottom-0 h-1 w-full opacity-0',
          isActive && 'opacity-100',
        )}
        style={{ backgroundColor: status.color }}
      />
    </button>
  )
}
