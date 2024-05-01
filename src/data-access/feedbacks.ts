import { db } from '@/db'
import {
  categoryEnum,
  comments,
  feedbacks,
  type Category,
  type IFeedback,
} from '@/db/schema'
import { SortOption } from '@/types'
import { asc, count, desc, eq, sql } from 'drizzle-orm'
import { unstable_cache as cache } from 'next/cache'

export const getFeedbacks = cache(
  async (categoryParam?: string, sortParam?: string) => {
    const categories = categoryEnum.enumValues
    const convertedCategoryParam = categoryParam?.toLowerCase() as Category

    const allFeedbacks = await db
      .select({
        id: feedbacks.id,
        title: feedbacks.title,
        category: feedbacks.category,
        userId: feedbacks.userId,
        upvotes: feedbacks.upvotes,
        status: feedbacks.status,
        description: feedbacks.description,
        commentsCount: count(comments.id),
      })
      .from(feedbacks)
      .where(
        categories.includes(convertedCategoryParam) &&
          convertedCategoryParam !== 'all'
          ? eq(feedbacks.category, convertedCategoryParam as Category)
          : undefined,
      )
      .leftJoin(comments, eq(comments.feedbackId, feedbacks.id))
      .orderBy(() => {
        switch (sortParam) {
          case SortOption.LEAST_UPVOTES.toString():
            return asc(feedbacks.upvotes)
          case SortOption.MOST_COMMENTS.toString():
            return desc(count(comments.id))
          case SortOption.LEAST_COMMENTS.toString():
            return asc(count(comments.id))
          default:
            return desc(feedbacks.upvotes)
        }
      })
      .groupBy(feedbacks.id)

    return allFeedbacks
  },
  ['feedbacks'],
  { tags: ['feedbacks'] },
)

export const getFeedback = cache(
  async (feedbackId: string) => {
    const feedbackData = await db
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
      .where(eq(feedbacks.id, feedbackId))
      .leftJoin(comments, eq(comments.feedbackId, feedbacks.id))
      .groupBy(feedbacks.id)

    return feedbackData[0]
  },
  ['feedbacks'],
  { tags: ['feedbacks'] },
)

export async function createFeedback(feedbackData: IFeedback) {
  const insertedFeedbacks = await db
    .insert(feedbacks)
    .values(feedbackData)
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

export async function upvoteFeedback(feedbackId: string) {
  const updatedFeedback = await db
    .update(feedbacks)
    .set({ upvotes: sql`${feedbacks.upvotes} + 1` })
    .where(eq(feedbacks.id, feedbackId))
    .returning()

  return updatedFeedback
}

export async function deleteFeedback(feedbackId: string) {
  const deletedFeedback = await db
    .delete(feedbacks)
    .where(eq(feedbacks.id, feedbackId))
    .returning({ id: feedbacks.id })

  return deletedFeedback[0]
}
