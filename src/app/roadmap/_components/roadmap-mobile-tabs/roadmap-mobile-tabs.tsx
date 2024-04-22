'use client'

import { type Feedback, Status } from '@/types'
import { getCurrentStatusData } from '@/lib/utils'
import { useState } from 'react'
import RoadmapColumn from '../roadmap-column'
import RoadmapMobileTabsItem from './roadmap-mobile-tabs-tem'

type Props = {
  data: Feedback[]
  className?: string
}

const currentStatusData = [Status.Planned, Status['In-Progress'], Status.Live]

export default function RoadmapMobileTabs({ data, className }: Props) {
  const [activeStatus, setActiveStatus] = useState(Status.Planned)
  const filteredData = getCurrentStatusData(data, activeStatus)

  return (
    <section className={className}>
      <div className="grid h-[59px] grid-cols-3">
        {currentStatusData.map((status) => (
          <RoadmapMobileTabsItem
            key={status}
            status={status}
            counter={getCurrentStatusData(data, status).length || 0}
            isActive={activeStatus === status}
            onClick={() => setActiveStatus(status)}
          />
        ))}
      </div>
      <span className="block h-[1px] w-full bg-@gray opacity-25" />
      <div className="p-6">
        <RoadmapColumn data={filteredData} status={activeStatus} />
      </div>
    </section>
  )
}
