import StatusItemCounter from '@/components/StatusItemCounter/StatusItemCounter'
import type { TStatus } from '@/types'
import routes from '@/utils/routes'
import Link from 'next/link'
import React from 'react'

type Props = {
  closeMenu: () => void
  statuses: TStatus[]
}

export default function HeaderRoadmapPanel({ closeMenu, statuses }: Props) {
  return (
    <div className="pt-5; grid gap-2 rounded-dlg bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[18px] font-bold text-@blue-900">Roadmap</p>
        <Link
          onClick={closeMenu}
          href={routes.roadmap}
          className="underline; text-[13px] font-semibold text-@blue-500"
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
