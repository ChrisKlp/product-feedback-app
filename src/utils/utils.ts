import { Feedback, Status } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { statuses } from './statuses'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const IS_SERVER = typeof window === 'undefined'

export const getCurrentStatusData = (data: Feedback[], status: Status) => {
  return data.filter(
    (feedback) => feedback.status.toLowerCase() === status.toLowerCase(),
  )
}

export const getStatusData = (status: Status) => {
  return statuses.find(
    (statusData) => statusData.name.toLowerCase() === status.toLowerCase(),
  )
}
