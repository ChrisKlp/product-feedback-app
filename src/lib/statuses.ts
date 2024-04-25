import type { StatusData } from '@/types'
import { statusColors } from 'tailwind.config'

const statuses = [
  {
    name: 'Planned',
    description: 'Ideas prioritized for research',
    color: statusColors.sOrange,
  },
  {
    name: 'In-Progress',
    description: 'Currently being developed',
    color: statusColors.sPurple,
  },
  {
    name: 'Live',
    description: 'Released features',
    color: statusColors.sCyan,
  },
]

export function getStatuses(statusData: StatusData) {
  return statuses.map((status) => ({
    ...status,
    count: statusData[status.name.toLowerCase() as keyof StatusData],
  }))
}
