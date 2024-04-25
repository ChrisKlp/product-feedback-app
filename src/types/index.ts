import type { SComment, SFeedback } from '@/db/schema'

export enum SortOption {
  MOST_UPVOTES = 'most-upvotes',
  LEAST_UPVOTES = 'least-upvotes',
  MOST_COMMENTS = 'most-comments',
  LEAST_COMMENTS = 'least-comments',
}

export type TFeedback = SFeedback & {
  commentsCount: number
}

export type TFeedbackWithComments = TFeedback & {
  comments?: SComment[] & { children?: SComment[] }
}

export type TComment = SComment & {
  children?: SComment[]
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
