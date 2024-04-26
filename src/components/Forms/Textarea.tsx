import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  className?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        'focus-visible:ring-ring flex min-h-[80px] w-full rounded-md bg-@blue-100 p-4 text-xs text-@gray ring-offset-@blue-500 placeholder:text-@blue-700 placeholder:opacity-75 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-[15px]',
        className,
      )}
      {...props}
    />
  )
}
