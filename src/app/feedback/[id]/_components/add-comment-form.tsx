'use client'
import Textarea from '@/components/Forms/Textarea'
import { addCommentFormSchema, type AddCommentFormValues } from '@/types/form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormRegister,
} from 'react-hook-form'

export default function AddCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AddCommentFormValues>({
    resolver: zodResolver(addCommentFormSchema),
  })

  const onSubmit: SubmitHandler<AddCommentFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-dlg bg-white p-6 md:px-8 md:pb-8"
    >
      <h3 className="h3 mb-6 text-[18px]">Add Comment</h3>
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
      <div className="mt-4 flex items-center justify-between">
        <p className="md:text-[15px]">{`${watch('value') ? 250 - watch('value').length : 250} Characters left`}</p>
        <button type="submit" className="btn">
          Post Comment
        </button>
      </div>
    </form>
  )
}
