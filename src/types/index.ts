import type { SComment, SFeedback } from '@/db/schema'

export type User = {
  image: string
  name: string
  username: string
}

export type TComment = {
  id: number
  content: string
  user: User
  replies?: Replay[]
}

export type Replay = {
  content: string
  replyingTo: string
  user: User
}

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

export type StatusData = {
  total: number
  suggestion: number
  planned: number
  'in-progress': number
  live: number
}
