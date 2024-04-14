export type Feedback = {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string
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
}
