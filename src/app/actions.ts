'use server'

import { upvoteFeedback } from '@/data-access/feedbacks'
import { createUser, getUser } from '@/data-access/users'
import { createVote, getUserVote } from '@/data-access/votes'
import routes from '@/lib/routes'
import { currentUser, type User } from '@clerk/nextjs/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function getUserAction(user: User) {
  let userData = await getUser(user.id)

  if (!userData) {
    const newUserData = {
      id: user.id,
      image: user.imageUrl,
      name: user.firstName ?? user.username ?? 'Anonymous',
      username: user.username ?? 'Anonymous',
    }

    userData = await createUser(newUserData)
  }

  return userData
}

export async function giveVoteAction(feedbackId: string) {
  const user = await currentUser()

  if (!user) {
    throw new Error('you must be logged in to create this feedback')
  }

  const userData = await getUserAction(user)

  if (!userData) {
    throw new Error('you must be logged in to create this feedback')
  }

  const duplicatedVote = await getUserVote(feedbackId, userData.id)

  if (duplicatedVote) {
    return null
  }

  const vote = await createVote(feedbackId, userData.id)
  await upvoteFeedback(feedbackId)

  revalidateTag('votes')
  revalidatePath(routes.home)

  return vote
}
