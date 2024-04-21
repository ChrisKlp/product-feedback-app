import { Status } from '@/types'
import { statusColors } from 'tailwind.config'

export const statuses = [
  {
    name: Status.Planned,
    description: 'Ideas prioritized for research',
    color: statusColors.sOrange,
  },
  {
    name: Status['In-Progress'],
    description: 'Currently being developed',
    color: statusColors.sPurple,
  },
  {
    name: Status.Live,
    description: 'Released features',
    color: statusColors.sCyan,
  },
]
