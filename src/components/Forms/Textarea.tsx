import { cn } from '@/lib/utils'
import React from 'react'
import type { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  className?: string
  name: string
  register: UseFormRegister<FieldValues>
  error?: FieldError
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({
  className,
  register,
  name,
  ...props
}: Props) {
  return (
    <textarea
      className={cn(
        'focus-visible:ring-ring flex min-h-[80px] w-full rounded-md bg-@blue-100 p-4 text-xs text-@gray placeholder:text-@blue-700 placeholder:opacity-75 focus:ring-@blue-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-[15px]',
        className,
      )}
      {...register(name)}
      {...props}
    />
  )
}
