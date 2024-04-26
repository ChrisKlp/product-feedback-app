import { cn } from '@/lib/utils'
import React from 'react'
import type { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  className?: string
  name: string
  register: UseFormRegister<FieldValues>
} & React.InputHTMLAttributes<HTMLInputElement>

export default function TextInput({
  className,
  type,
  register,
  name,
  ...props
}: Props) {
  return (
    <input
      className={cn(
        'h-12 rounded-[5px] bg-@blue-100 px-6 text-[15px] text-@blue-800 placeholder-@blue-800 placeholder-opacity-50 transition-shadow hover:ring-1 hover:ring-@blue-500 focus:outline-none focus:ring-1 focus:ring-@blue-500 disabled:cursor-not-allowed',
        className,
      )}
      type={type}
      {...register(name)}
      {...props}
    />
  )
}
