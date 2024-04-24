import { db } from '@/db'
import { type IFeedback, comments, feedbacks } from '@/db/schema'
import { count, eq, isNull } from 'drizzle-orm'

export async function getFeedbacks() {
  const allFeedbacks = await db
    .select({
      id: feedbacks.id,
      title: feedbacks.title,
      userId: feedbacks.userId,
      category: feedbacks.category,
      upvotes: feedbacks.upvotes,
      status: feedbacks.status,
      description: feedbacks.description,
      commentsCount: count(comments.id),
    })
    .from(feedbacks)
    .leftJoin(comments, eq(comments.feedbackId, feedbacks.id))
    .groupBy(feedbacks.id)

  return allFeedbacks
}

export async function getFeedback(feedbackId: string) {
  const singleFeedback = await db.query.feedbacks.findFirst({
    where: eq(feedbacks.id, feedbackId),
    with: {
      comments: {
        with: {
          children: true,
        },
        where: isNull(comments.parentId),
      },
    },
  })
  return singleFeedback
}

export async function createFeedback(feedbackData: IFeedback, userId: string) {
  const insertedFeedbacks = await db
    .insert(feedbacks)
    .values({ ...feedbackData, userId })
    .returning()

  return insertedFeedbacks[0]
}

export async function updateFeedback(
  feedbackId: string,
  feedbackData: IFeedback,
) {
  const updatedFeedback = await db
    .update(feedbacks)
    .set(feedbackData)
    .where(eq(feedbacks.id, feedbackId))
    .returning()

  return updatedFeedback[0]
}
