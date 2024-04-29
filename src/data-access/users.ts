import { db } from '@/db'
import { type IUser, users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getUser(userId: string) {
  return db.query.users.findFirst({
    where: eq(users.id, userId),
  })
}

export async function createUser(userData: IUser) {
  const insertedUsers = await db.insert(users).values(userData).returning()
  return insertedUsers[0]
}
