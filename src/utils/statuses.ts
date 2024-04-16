import { Status } from '@/types'

export const statuses = [
  {
    name: Status.Planned,
    description: 'Ideas prioritized for research',
    color: '#F49F85',
  },
  {
    name: Status['In-Progress'],
    description: 'Currently being developed',
    color: '#AD1FEA',
  },
  { name: Status.Live, description: 'Released features', color: '#62BCFA' },
]
