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

export const statusEnum = pgEnum('status', [
  'suggestion',
  'planned',
  'in-progress',
  'live',
])

export const categoryEnum = pgEnum('category', [
  'all',
  'ui',
  'ux',
  'enhancement',
  'bug',
  'feature',
])

export const feedbacks = pgTable('feedbacks', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  title: text('title').notNull(),
  userId: text('userId').notNull(),
  category: categoryEnum('category').default('all').notNull(),
  upvotes: integer('upvotes').default(0).notNull(),
  status: statusEnum('status').default('suggestion').notNull(),
  description: text('description').notNull(),
})

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  content: text('content').notNull(),
  userId: text('userId').notNull(),
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
    userId: text('userId').notNull(),
    feedbackId: uuid('feedbackId')
      .references(() => feedbacks.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.feedbackId] }),
  }),
)

// Relations

export const feedbacksRelations = relations(feedbacks, ({ many }) => ({
  comments: many(comments),
  votes: many(votes),
}))

export const commentsRelations = relations(comments, ({ one, many }) => ({
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
  feedback: one(feedbacks, {
    fields: [votes.feedbackId],
    references: [feedbacks.id],
  }),
}))

export type SFeedback = typeof feedbacks.$inferSelect
export type IFeedback = typeof feedbacks.$inferInsert
export type SComment = typeof comments.$inferSelect
export type IComment = typeof comments.$inferInsert

const categoryArr = [...categoryEnum.enumValues] as const
export type Category = (typeof categoryArr)[number]

const statusArr = [...statusEnum.enumValues] as const
export type Status = (typeof statusArr)[number]
