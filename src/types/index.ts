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
