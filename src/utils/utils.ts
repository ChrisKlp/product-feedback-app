import { Feedback, Status } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { statuses } from './statuses'
import data from '@/mockedData.json'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const IS_SERVER = typeof window === 'undefined'

export function getCurrentStatusData(data: Feedback[], status: Status) {
  return data.filter(
    (feedback) => feedback.status.toLowerCase() === status.toLowerCase(),
  )
}

export function getStatusData(status: Status) {
  return statuses.find(
    (statusData) => statusData.name.toLowerCase() === status.toLowerCase(),
  )
}

export function getFeedbackData(id: number) {
  return data.productRequests.find((feedback) => feedback.id === id)
}
