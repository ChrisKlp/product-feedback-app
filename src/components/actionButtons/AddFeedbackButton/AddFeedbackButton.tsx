'use client'

import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function AddFeedbackButton({
  className,
}: {
  className?: string
}) {
  const router = useRouter()
  return (
    <>
      <SignedIn>
        <button
          type="button"
          className={cn('btn', className)}
          onClick={() => router.push(routes.newFeedback)}
        >
          + Add Feedback
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button type="button" className={cn('btn', className)}>
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </>
  )
}
