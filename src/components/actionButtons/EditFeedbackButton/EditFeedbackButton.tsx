'use client'

import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { useParams, useRouter } from 'next/navigation'

export default function EditFeedbackButton({
  className,
}: {
  className?: string
}) {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <SignedIn>
        <button
          type="button"
          className={cn('btn btn-blue', className)}
          onClick={() => router.push(`${routes.editFeedback}/${id}`)}
        >
          Edit Feedback
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button type="button" className={cn('btn btn-blue', className)}>
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </>
  )
}
