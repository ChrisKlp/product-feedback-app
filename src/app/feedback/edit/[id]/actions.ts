'use server'

import { deleteFeedback, updateFeedback } from '@/data-access/feedbacks'
import type { IFeedback } from '@/db/schema'
import routes from '@/lib/routes'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateFeedbackAction(
  feedbackId: string,
  feedbackData: Omit<IFeedback, 'userId'>,
) {
  const user = await currentUser()

  if (!user) {
    throw new Error('you must be logged in to update this feedback')
  }

  await updateFeedback(feedbackId, {
    title: feedbackData.title,
    description: feedbackData.description,
    status: feedbackData.status,
    category: feedbackData.category,
    userId: user.id,
  })

  revalidateTag('feedbacks')
  revalidatePath('/', 'layout')
  revalidatePath(`${routes.feedback}/${feedbackId}`, 'layout')
  redirect(`${routes.feedback}/${feedbackId}`)
}

export async function deleteFeedbackAction(feedbackId: string) {
  const feedback = await deleteFeedback(feedbackId)

  revalidateTag('feedbacks')
  revalidatePath('/')

  return feedback
}
