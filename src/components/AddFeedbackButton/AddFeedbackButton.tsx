'use client'

import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function AddFeedbackButton({
  className,
}: {
  className?: string
}) {
  const router = useRouter()
  return (
    <button
      type="button"
      className={cn('btn', className)}
      onClick={() => router.push(routes.newFeedback)}
    >
      + Add Feedback
    </button>
  )
}
