import type { SComment, SFeedback, SUser } from '@/db/schema'

export enum SortOption {
  MOST_UPVOTES = 'most-upvotes',
  LEAST_UPVOTES = 'least-upvotes',
  MOST_COMMENTS = 'most-comments',
  LEAST_COMMENTS = 'least-comments',
}

export type TFeedback = SFeedback & {
  commentsCount: number
}

export type TComment = SComment & {
  children?: SComment[]
  user?: SUser
}

export type StatusData = {
  total: number
  suggestion: number
  planned: number
  'in-progress': number
  live: number
}

export type ClientStatusData = {
  count: number
  name: string
  description: string
  color: string
}
