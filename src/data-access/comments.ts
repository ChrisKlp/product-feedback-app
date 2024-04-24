import { db } from '@/db'
import { type IComment, comments } from '@/db/schema'

export async function createComment(commentData: IComment) {
  const insertedComments = await db
    .insert(comments)
    .values({ ...commentData })
    .returning()

  return insertedComments[0]
}
