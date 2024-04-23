import { Status } from '@/types'
import { statusColors } from 'tailwind.config'

export const statuses = [
  {
    name: Status.PLANNED.toString(),
    description: 'Ideas prioritized for research',
    color: statusColors.sOrange,
  },
  {
    name: Status.IN_PROGRESS.toString(),
    description: 'Currently being developed',
    color: statusColors.sPurple,
  },
  {
    name: Status.LIVE.toString(),
    description: 'Released features',
    color: statusColors.sCyan,
  },
]
