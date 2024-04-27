'use client'

import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { useParams, useRouter } from 'next/navigation'

export default function EditFeedbackButton({
  className,
}: {
  className?: string
}) {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  return (
    <button
      type="button"
      className={cn('btn btn-blue truncate', className)}
      onClick={() => router.push(`${routes.editFeedback}/${id}`)}
    >
      Edit Feedback
    </button>
  )
}
