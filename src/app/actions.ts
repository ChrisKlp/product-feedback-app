'use server'

import { createUser, getUser } from '@/data-access/users'
import type { User } from '@clerk/nextjs/server'

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
