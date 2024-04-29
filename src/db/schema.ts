import { relations } from 'drizzle-orm'
import {
  type AnyPgColumn,
  integer,
  pgEnum,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const pgTable = pgTableCreator((name) => `feedback_app_${name}`)

export const statusEnum = pgEnum('feedback_app_status', [
  'suggestion',
  'planned',
  'in-progress',
  'live',
])

export const categoryEnum = pgEnum('feedback_app_category', [
  'all',
  'ui',
  'ux',
  'enhancement',
  'bug',
  'feature',
])

export const users = pgTable('users', {
  id: text('id').primaryKey().notNull(),
  image: text('image').notNull(),
  name: text('name').notNull(),
  username: text('username').notNull(),
})

export const feedbacks = pgTable('feedbacks', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  title: text('title').notNull(),
  userId: text('userId')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  category: categoryEnum('feedback_app_category').default('all').notNull(),
  upvotes: integer('upvotes').default(0).notNull(),
  status: statusEnum('feedback_app_status').default('suggestion').notNull(),
  description: text('description').notNull(),
})

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  content: text('content').notNull(),
  userId: text('userId')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  feedbackId: uuid('feedbackId')
    .references(() => feedbacks.id, { onDelete: 'cascade' })
    .notNull(),
  parentId: uuid('parentId').references((): AnyPgColumn => comments.id),
  replyingTo: text('replyingTo'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const votes = pgTable(
  'votes',
  {
    userId: text('userId')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    feedbackId: uuid('feedbackId')
      .references(() => feedbacks.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.feedbackId] }),
  }),
)

// Relations

export const userRelations = relations(users, ({ many }) => ({
  feedbacks: many(feedbacks),
  comments: many(comments),
  votes: many(votes),
}))

export const feedbacksRelations = relations(feedbacks, ({ one, many }) => ({
  user: one(users, {
    fields: [feedbacks.userId],
    references: [users.id],
  }),
  comments: many(comments),
  votes: many(votes),
}))

export const commentsRelations = relations(comments, ({ one, many }) => ({
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
  feedback: one(feedbacks, {
    fields: [comments.feedbackId],
    references: [feedbacks.id],
  }),
  parent: one(comments, {
    fields: [comments.parentId],
    references: [comments.id],
    relationName: 'ParentComment',
  }),
  children: many(comments, {
    relationName: 'ParentComment',
  }),
}))

export const votesRelations = relations(votes, ({ one }) => ({
  user: one(users, {
    fields: [votes.userId],
    references: [users.id],
  }),
  feedback: one(feedbacks, {
    fields: [votes.feedbackId],
    references: [feedbacks.id],
  }),
}))

export type SUser = typeof users.$inferSelect
export type IUser = typeof users.$inferInsert
export type SFeedback = typeof feedbacks.$inferSelect
export type IFeedback = typeof feedbacks.$inferInsert
export type SComment = typeof comments.$inferSelect
export type IComment = typeof comments.$inferInsert
export type SVotes = typeof votes.$inferInsert
export type IVotes = typeof votes.$inferSelect

export const categoryArr = [...categoryEnum.enumValues] as const
export type Category = (typeof categoryArr)[number]

export const statusArr = [...statusEnum.enumValues] as const
export type Status = (typeof statusArr)[number]
