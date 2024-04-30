'use server'

import { deleteFeedback, updateFeedback } from '@/data-access/feedbacks'
import type { IFeedback } from '@/db/schema'
import routes from '@/lib/routes'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function updateFeedbackAction(
  feedbackId: string,
  feedbackData: Omit<IFeedback, 'userId'>,
) {
  const user = await currentUser()

  if (!user) {
    throw new Error('you must be logged in to update this feedback')
  }

  const feedback = await updateFeedback(feedbackId, {
    title: feedbackData.title,
    description: feedbackData.description,
    status: feedbackData.status,
    category: feedbackData.category,
    userId: user.id,
  })

  revalidatePath(routes.home)
  revalidatePath(`${routes.feedback}/${feedbackId}`)

  return feedback
}

export async function deleteFeedbackAction(feedbackId: string) {
  const feedback = await deleteFeedback(feedbackId)

  revalidatePath(routes.home)

  return feedback
}
