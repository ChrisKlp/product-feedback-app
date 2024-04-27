'use client'

import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import SignInButton from '@/components/actionButtons/SignInButton/SignInButton'

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
        <SignInButton className={className} />
      </SignedOut>
    </>
  )
}
