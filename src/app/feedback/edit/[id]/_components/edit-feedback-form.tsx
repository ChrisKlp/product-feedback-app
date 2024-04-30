'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormRegister,
} from 'react-hook-form'
import FieldWrapper from '@/components/Forms/FieldWrapper'
import FormSelect from '@/components/Forms/FormSelect'
import SelectItem from '@/components/Forms/SelectItem'
import TextInput from '@/components/Forms/TextInput'
import Textarea from '@/components/Forms/Textarea'
import {
  categoryArr,
  statusArr,
  type Status,
  type Category,
  type SFeedback,
} from '@/db/schema'
import { capitalize, cn } from '@/lib/utils'
import {
  type EditFeedbackFormValues,
  editFeedbackFormSchema,
} from '@/types/form'
import { deleteFeedbackAction, updateFeedbackAction } from '../actions'
import { toast } from 'react-hot-toast'
import routes from '@/lib/routes'

type Props = {
  className?: string
  initialValues: SFeedback
}

const categories = categoryArr
  .filter((category) => category !== 'all')
  .reverse()

export default function EditFeedbackForm({ className, initialValues }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditFeedbackFormValues>({
    resolver: zodResolver(editFeedbackFormSchema),
    defaultValues: {
      category: initialValues.category,
      title: initialValues.title,
      description: initialValues.description,
      status: initialValues.status,
    },
  })

  const onSubmit: SubmitHandler<EditFeedbackFormValues> = async (data) => {
    await updateFeedbackAction(initialValues.id, data)

    toast.success('Feedback updated successfully')
  }

  const onDelete = async () => {
    const feedback = await deleteFeedbackAction(initialValues.id)

    if (feedback) {
      toast.success('Feedback deleted successfully')
      router.prefetch(routes.home)
      router.push(routes.home)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('grid gap-6', className)}
    >
      <FieldWrapper
        label="Feedback Title"
        headline="Add a short, descriptive headline"
        error={errors.title}
      >
        <TextInput
          name="title"
          type="text"
          register={register as unknown as UseFormRegister<FieldValues>}
        />
      </FieldWrapper>
      <FieldWrapper
        label="Category"
        headline="Choose a category for your feedback"
        error={errors.category}
      >
        <FormSelect
          defaultValue={initialValues.category}
          onValueChange={(value) => setValue('category', value as Category)}
        >
          {categories.map((category, index, array) => (
            <SelectItem
              key={category}
              value={category}
              isLast={index === array.length - 1}
            >
              {category === 'ui' || category === 'ux'
                ? category.toUpperCase()
                : capitalize(category)}
            </SelectItem>
          ))}
        </FormSelect>
      </FieldWrapper>
      <FieldWrapper
        label="Update Status"
        headline="Change feature state"
        error={errors.status}
      >
        <FormSelect
          defaultValue={initialValues.status}
          onValueChange={(value) => setValue('status', value as Status)}
        >
          {statusArr.map((status, index, array) => (
            <SelectItem
              key={status}
              value={status}
              isLast={index === array.length - 1}
            >
              {capitalize(status)}
            </SelectItem>
          ))}
        </FormSelect>
      </FieldWrapper>
      <FieldWrapper
        label="Feedback Detail"
        headline="Include any specific comments on what should be improved, added, etc."
        error={errors.description}
      >
        <Textarea
          name="description"
          register={register as unknown as UseFormRegister<FieldValues>}
        />
      </FieldWrapper>
      <div className="mt-4 grid w-full gap-4 md:flex md:flex-row-reverse">
        <button type="submit" className="btn">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-darkBlue"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <div className="hidden md:block md:flex-1" />
        <button type="button" className="btn btn-red" onClick={onDelete}>
          Delete
        </button>
      </div>
    </form>
  )
}
