'use client'

import { Feedback, Status } from '@/types'
import { getCurrentStatusData } from '@/utils/utils'
import { useState } from 'react'
import RoadmapColumn from '../RoadmapColumn'
import RoadmapTabsItem from './RoadmapTabsItem'

type Props = {
  data: Feedback[]
  className?: string
}

const currentStatusData = [Status.Planned, Status['In-Progress'], Status.Live]

export default function RoadmapTabs({ data, className }: Props) {
  const [activeStatus, setActiveStatus] = useState(Status.Planned)
  const filteredData = getCurrentStatusData(data, activeStatus)

  return (
    <section className={className}>
      <div className="grid h-[59px] grid-cols-3">
        {currentStatusData.map((status) => (
          <RoadmapTabsItem
            key={status}
            status={status}
            counter={getCurrentStatusData(data, status).length || 0}
            isActive={activeStatus === status}
            onClick={() => setActiveStatus(status)}
          />
        ))}
      </div>
      <span className="bg-darkBlue700 block h-[1px] w-full opacity-25" />
      <div className="p-6">
        <RoadmapColumn data={filteredData} activeStatus={activeStatus} />
      </div>
    </section>
  )
}
