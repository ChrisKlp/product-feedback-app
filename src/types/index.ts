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

export enum Filter {
  'Most Upvotes' = 'Most Upvotes',
  'Least Upvotes' = 'Least Upvotes',
  'Most Comments' = 'Most Comments',
  'Least Comments' = 'Least Comments',
}

export enum Status {
  'Planned' = 'Planned',
  'In-Progress' = 'In-Progress',
  'Live' = 'Live',
}
