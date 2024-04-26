import type { TFeedback } from '@/types'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import UpvoteButton from './UpvoteButton'

type Props = {
  data: TFeedback
  isActive?: boolean
  withStatus?: boolean
  className?: string
  onClick?: () => void
}

export default function UpvoteButtonWithClerk(props: Props) {
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
