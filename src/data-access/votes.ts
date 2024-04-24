import { db } from '@/db'
import { votes } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getUserVotes(userId: string) {
  const userVotes = await db
    .select({
      feedbackId: votes.feedbackId,
      userId: votes.userId,
    })
    .from(votes)
    .where(eq(votes.userId, userId))

  return userVotes
}
