import { cn } from '@/lib/utils'
import type { ClientStatusData, TFeedback } from '@/types'
import RoadmapColumn from './roadmap-column'

type Props = {
  data: TFeedback[]
  statusData: ClientStatusData[]
  className?: string
}

export default function RoadmapGrid({ data, statusData, className }: Props) {
  return (
    <section
      className={cn(
        'hidden md:mt-8 md:grid md:grid-cols-3 md:gap-[10px] lg:mt-12 lg:gap-[30px]',
        className,
      )}
    >
      {statusData.map((status) => {
        const filteredData = data.filter(
          (feedback) => feedback.status === status.name.toLowerCase(),
        )
        return (
          <RoadmapColumn
            key={status.name}
            data={filteredData}
            statusData={status}
          />
        )
      })}
    </section>
  )
}
