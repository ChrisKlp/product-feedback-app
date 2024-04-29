'use client'

import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import UpvoteButton, { type UpvoteButtonProps } from './UpvoteButton'
import { useTransition } from 'react'
import { giveVoteAction } from '@/app/actions'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function UpvoteButtonWithClerk(props: UpvoteButtonProps) {
  const startTransition = useTransition()[1]
  const router = useRouter()

  const handleClick = () => {
    if (props.isVoted) return
    startTransition(async () => {
      const vote = await giveVoteAction(props.data.id)

      if (vote) {
        toast.success('Vote submitted successfully!')
        router.refresh()
      }
    })
  }

  return (
    <>
      <SignedIn>
        <UpvoteButton onClick={handleClick} {...props} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <UpvoteButton {...props} />
        </SignInButton>
      </SignedOut>
    </>
  )
}
