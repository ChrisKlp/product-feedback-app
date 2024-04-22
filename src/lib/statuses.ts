import { Status } from '@/types'
import { statusColors } from 'tailwind.config'

export const statuses = [
  {
    name: Status.Planned as string,
    description: 'Ideas prioritized for research',
    color: statusColors.sOrange,
  },
  {
    name: Status['In-Progress'] as string,
    description: 'Currently being developed',
    color: statusColors.sPurple,
  },
  {
    name: Status.Live as string,
    description: 'Released features',
    color: statusColors.sCyan,
  },
]
