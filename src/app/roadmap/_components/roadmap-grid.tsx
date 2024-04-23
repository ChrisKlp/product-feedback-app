'use client'

import { type Feedback, Status } from '@/types'
import RoadmapColumn from './roadmap-column'
import { cn, getCurrentStatusData } from '@/lib/utils'

type Props = {
  data: Feedback[]
  className?: string
}

const currentStatusData = Object.values(Status)

export default function RoadmapGrid({ data, className }: Props) {
  return (
    <section
      className={cn(
        'hidden md:mt-8 md:grid md:grid-cols-3 md:gap-[10px] lg:mt-12 lg:gap-[30px]',
        className,
      )}
    >
      {currentStatusData.map((status) => (
        <RoadmapColumn
          key={status}
          data={getCurrentStatusData(data, status)}
          status={status}
        />
      ))}
    </section>
  )
}
