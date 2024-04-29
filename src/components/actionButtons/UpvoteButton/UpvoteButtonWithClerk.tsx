'use client'

import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import UpvoteButton, { type UpvoteButtonProps } from './UpvoteButton'

export default function UpvoteButtonWithClerk(props: UpvoteButtonProps) {
  return (
    <>
      <SignedIn>
        <UpvoteButton onClick={() => console.log('hello')} {...props} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <UpvoteButton {...props} />
        </SignInButton>
      </SignedOut>
    </>
  )
}
