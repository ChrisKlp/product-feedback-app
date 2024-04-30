import { db } from '@/db'
import { votes } from '@/db/schema'
import { and, eq } from 'drizzle-orm'
import { unstable_cache as cache } from 'next/cache'

export const getUserVotes = cache(
  async (userId: string | null) => {
    if (!userId) {
      return []
    }
    const userVotes = await db
      .select({
        feedbackId: votes.feedbackId,
        userId: votes.userId,
      })
      .from(votes)
      .where(eq(votes.userId, userId))

    return userVotes
  },
  ['votes'],
  { tags: ['votes'] },
)

export const getUserVote = cache(
  async (feedbackId: string, userId: string) => {
    const userVote = await db.query.votes.findFirst({
      where: and(eq(votes.feedbackId, feedbackId), eq(votes.userId, userId)),
    })

    return userVote
  },
  ['votes'],
  { tags: ['votes'] },
)

export async function createVote(feedbackId: string, userId: string) {
  const vote = await db.insert(votes).values({ feedbackId, userId }).returning()

  return vote[0]
}
