'use server'

import { getUserAction } from '@/app/actions'
import { createFeedback } from '@/data-access/feedbacks'
import type { IFeedback } from '@/db/schema'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function createFeedbackAction(
  feedbackData: Omit<IFeedback, 'userId'>,
) {
  const user = await currentUser()

  if (!user) {
    throw new Error('you must be logged in to create this feedback')
  }

  const userData = await getUserAction(user)

  if (!userData) {
    throw new Error('you must be logged in to create this feedback')
  }

  const feedback = await createFeedback({
    ...feedbackData,
    userId: userData.id,
  })

  revalidateTag('feedbacks')
  revalidatePath('/')

  return feedback
}
