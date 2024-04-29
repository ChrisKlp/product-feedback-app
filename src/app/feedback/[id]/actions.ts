'use server'

import { getUserAction } from '@/app/actions'
import { createComment } from '@/data-access/comments'
import type { IComment } from '@/db/schema'
import routes from '@/lib/routes'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function createCommentAction(
  commentData: Omit<IComment, 'userId'>,
) {
  const user = await currentUser()

  if (!user) {
    throw new Error('you must be logged in to create this feedback')
  }

  const userData = await getUserAction(user)

  if (!userData) {
    throw new Error('you must be logged in to create this feedback')
  }

  const comment = await createComment({
    ...commentData,
    userId: userData.id,
  })

  revalidatePath(routes.home)

  return comment
}
