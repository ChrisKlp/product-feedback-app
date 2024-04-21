import StatusItemCounter from '@/components/StatusItemCounter/StatusItemCounter'
import routes from '@/utils/routes'
import { statuses } from '@/utils/statuses'
import Link from 'next/link'
import React from 'react'

type Props = {
  closeMenu: () => void
}

export default function HeaderRoadmapPanel({ closeMenu }: Props) {
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
      {statuses.map((status, i) => (
        <StatusItemCounter
          key={status.name}
          name={status.name}
          color={status.color}
          count={i}
        />
      ))}
    </div>
  )
}
