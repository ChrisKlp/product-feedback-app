import { db } from '@/db'
import { type IComment, comments } from '@/db/schema'
import { and, desc, eq, isNull } from 'drizzle-orm'
import { unstable_cache as cache } from 'next/cache'

export const getComments = cache(
  async (feedbackId: string) => {
    const commentsData = await db.query.comments.findMany({
      where: and(
        eq(comments.feedbackId, feedbackId),
        isNull(comments.parentId),
      ),
      with: {
        user: true,
        children: {
          with: {
            user: true,
          },
        },
      },
      orderBy: desc(comments.createdAt),
    })

    return commentsData
  },
  ['comments'],
  { tags: ['comments'] },
)

export async function createComment(commentData: IComment) {
  const insertedComments = await db
    .insert(comments)
    .values({ ...commentData })
    .returning()

  return insertedComments[0]
}
