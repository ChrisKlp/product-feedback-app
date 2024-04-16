'use client'

import { Feedback, Status } from '@/types'
import RoadmapColumn from './RoadmapColumn'
import { cn, getCurrentStatusData } from '@/utils/utils'

type Props = {
  data: Feedback[]
  className?: string
}

const currentStatusData = [Status.Planned, Status['In-Progress'], Status.Live]

export default function RoadmapGrid({ data, className }: Props) {
  return (
    <section
      className={cn('hidden md:grid md:grid-cols-3 md:gap-[10px]', className)}
    >
      {currentStatusData.map((status) => (
        <RoadmapColumn
          key={status}
          data={getCurrentStatusData(data, status)}
          activeStatus={status}
        />
      ))}
    </section>
  )
}
