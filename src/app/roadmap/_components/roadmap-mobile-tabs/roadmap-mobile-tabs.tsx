'use client'

import type { ClientStatusData, TFeedback } from '@/types'
import { useState } from 'react'
import RoadmapColumn from '../roadmap-column'
import RoadmapMobileTabsItem from './roadmap-mobile-tabs-item'

type Props = {
  data: TFeedback[]
  statusData: ClientStatusData[]
  className?: string
}

export default function RoadmapMobileTabs({
  data,
  statusData,
  className,
}: Props) {
  const [activeStatus, setActiveStatus] = useState(
    statusData[0]?.name ?? 'In-Progress',
  )
  const filteredData = data.filter(
    (feedback) => feedback.status === activeStatus.toLowerCase(),
  )
  const activeStatusData = statusData.find(
    (status) => status.name === activeStatus,
  )

  return (
    <section className={className}>
      <div className="grid h-[59px] grid-cols-3">
        {statusData.map((status) => (
          <RoadmapMobileTabsItem
            key={status.name}
            status={status}
            isActive={activeStatus === status.name}
            onClick={() => setActiveStatus(status.name)}
          />
        ))}
      </div>
      <span className="block h-[1px] w-full bg-@gray opacity-25" />
      <div className="p-6">
        {activeStatusData && (
          <RoadmapColumn data={filteredData} statusData={activeStatusData} />
        )}
      </div>
    </section>
  )
}
