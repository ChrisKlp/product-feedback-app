'use client'

import FieldWrapper from '@/components/Forms/FieldWrapper'
import FormSelect from '@/components/Forms/FormSelect'
import SelectItem from '@/components/Forms/SelectItem'
import TextInput from '@/components/Forms/TextInput'
import Textarea from '@/components/Forms/Textarea'
import { type Category, categoryArr } from '@/db/schema'
import { capitalize, cn } from '@/lib/utils'
import {
  createFeedbackFormSchema,
  type CreateFeedbackFormValues,
} from '@/types/form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  type FieldValues,
  type SubmitHandler,
  type UseFormRegister,
  useForm,
} from 'react-hook-form'

type Props = {
  className?: string
}

const categories = categoryArr
  .filter((category) => category !== 'all')
  .reverse()

export default function CreateFeedbackForm({ className }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateFeedbackFormValues>({
    resolver: zodResolver(createFeedbackFormSchema),
  })

  const onSubmit: SubmitHandler<CreateFeedbackFormValues> = (data) => {
    alert(JSON.stringify(data))
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
      >
        <FormSelect
          defaultValue="feature"
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
        label="Feedback Detail"
        headline="Include any specific comments on what should be improved, added, etc."
        error={errors.description}
      >
        <Textarea
          name="details"
          register={register as unknown as UseFormRegister<FieldValues>}
        />
      </FieldWrapper>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  )
}
