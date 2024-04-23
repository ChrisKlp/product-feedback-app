export type Feedback = {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string
  comments?: TComment[]
}

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
  MOST_UPVOTES = 'Most Upvotes',
  LEAST_UPVOTES = 'Least Upvotes',
  MOST_COMMENTS = 'Most Comments',
  LEAST_COMMENTS = 'Least Comments',
}

export enum Status {
  PLANNED = 'Planned',
  IN_PROGRESS = 'In-Progress',
  LIVE = 'Live',
}

export type TStatus = {
  count: number
  name: string
  description: string
  color: string
}
