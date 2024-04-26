import StatusItemCounter from '@/components/StatusItemCounter/StatusItemCounter'
import type { StatusData } from '@/types'
import routes from '@/lib/routes'
import Link from 'next/link'
import React from 'react'
import { getStatuses } from '@/lib/statuses'

type Props = {
  closeMenu: () => void
  statusData: StatusData
}

export default function HeaderRoadmapPanel({ closeMenu, statusData }: Props) {
  const statuses = getStatuses(statusData)

  return (
    <div className="pt-5; grid gap-2 rounded-dlg bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[18px] font-bold text-@blue-800">Roadmap</p>
        <Link
          onClick={closeMenu}
          href={routes.roadmap}
          className="underline; text-xs font-semibold text-@blue-500"
        >
          View
        </Link>
      </div>
      {statuses.map((status) => (
        <StatusItemCounter
          key={status.name}
          name={status.name}
          color={status.color}
          count={status.count}
        />
      ))}
    </div>
  )
}
