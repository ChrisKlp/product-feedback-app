import { type AddCommentFormValues, addCommentFormSchema } from '@/types/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {
  useForm,
  type SubmitHandler,
  type UseFormRegister,
  type FieldValues,
} from 'react-hook-form'
import Textarea from '../Forms/Textarea'
import { type TComment } from '@/types'
import { cn } from '@/lib/utils'
import { createCommentAction } from '@/app/feedback/[id]/actions'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
  data: TComment
  hideForm: () => void
  className?: string
}

export default function ReplyForm({ data, hideForm, className }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCommentFormValues>({
    resolver: zodResolver(addCommentFormSchema),
  })

  const onSubmit: SubmitHandler<AddCommentFormValues> = async (formData) => {
    if (data.user?.username) {
      const comment = await createCommentAction({
        feedbackId: data.feedbackId,
        replyingTo: data.user.username,
        parentId: data.parentId ?? data.id,
        content: formData.value,
      })

      if (comment) {
        toast.success('Comment created successfully')
        router.refresh()
        hideForm()
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('mt-4 flex flex-col gap-4 md:mt-6 md:flex-row', className)}
    >
      <div className="flex-1">
        <Textarea
          name="value"
          placeholder="Type your comment here"
          register={register as unknown as UseFormRegister<FieldValues>}
        />
        {errors.value && (
          <span className="mt-1 text-[14px] text-@red-500">
            {errors.value.message}
          </span>
        )}
      </div>
      <button type="submit" className="btn self-end md:self-start">
        Post Reply
      </button>
    </form>
  )
}
