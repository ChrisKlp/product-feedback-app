import { type Status } from '@/db/schema'
import type { TFeedback } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getSuggestionsData(allFeedbacks: TFeedback[]) {
  const suggestion = allFeedbacks.filter((f) => f.status === 'suggestion')
  return {
    feedbacks: suggestion,
    count: suggestion.length,
  }
}

export function getRoadmapData(allFeedbacks: TFeedback[]) {
  const roadmap = allFeedbacks.filter((f) => f.status !== 'suggestion')
  const statusCount = allFeedbacks.reduce(
    (acc, curr) => {
      if (!acc[curr.status]) {
        acc[curr.status] = 0
      }

      return {
        ...acc,
        [curr.status]: acc[curr.status] + 1,
      }
    },
    {} as Record<Status, number>,
  )
  return {
    feedbacks: roadmap,
    statusData: {
      ...statusCount,
      total: roadmap.length,
    },
  }
}
