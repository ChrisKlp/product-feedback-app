import { db } from '@/db'
import { votes } from '@/db/schema'
import { and, eq } from 'drizzle-orm'

export async function getUserVotes(userId: string | null) {
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
}

export async function getUserVote(feedbackId: string, userId: string) {
  const userVote = await db.query.votes.findFirst({
    where: and(eq(votes.feedbackId, feedbackId), eq(votes.userId, userId)),
  })

  return userVote
}

export async function createVote(feedbackId: string, userId: string) {
  const vote = await db.insert(votes).values({ feedbackId, userId }).returning()

  return vote[0]
}
