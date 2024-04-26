import { categoryArr, statusArr } from '@/db/schema'
import { z } from 'zod'

export type CreateFeedbackFormValues = z.infer<typeof createFeedbackFormSchema>
export type AddCommentFormValues = z.infer<typeof addCommentFormSchema>
export type EditFeedbackFormValues = z.infer<typeof editFeedbackFormSchema>

export const createFeedbackFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .min(5, { message: 'Title is too short' }),
  category: z.enum(categoryArr).default('feature'),
  description: z
    .string()
    .min(1, { message: 'Details are required' })
    .min(5, { message: 'Details are too short' })
    .max(250, { message: 'Details are too long' }),
})

export const addCommentFormSchema = z.object({
  value: z
    .string()
    .min(1, { message: 'Comment is required' })
    .min(5, { message: 'Comment is too short' })
    .max(250, { message: 'Comment is too long' }),
})

export const editFeedbackFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .min(5, { message: 'Title is too short' }),
  category: z.enum(categoryArr),
  status: z.enum(statusArr),
  description: z
    .string()
    .min(1, { message: 'Details are required' })
    .min(5, { message: 'Details are too short' })
    .max(250, { message: 'Details are too long' }),
})
