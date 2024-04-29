import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedbackWithCounter } from '@/data-access/feedbacks'
import routes from '@/lib/routes'
import { SignInButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'
import AddCommentForm from './_components/add-comment-form'
import CommentList from './_components/comment-list'

export const dynamic = 'force-dynamic'

type Props = { params: { id: string } }

export default async function SingleFeedbackPage({ params: { id } }: Props) {
  const feedbackData = await getFeedbackWithCounter(id)
  const { userId }: { userId: string | null } = auth()

  if (!feedbackData) {
    notFound()
  }

  return (
    <div className="grid gap-6">
      <FeedbackCard data={feedbackData} withLinks={false} />
      {feedbackData.commentsCount > 0 && (
        <CommentList
          feedbackId={id}
          commentsCount={feedbackData.commentsCount}
        />
      )}
      {userId ? (
        <AddCommentForm data={feedbackData} />
      ) : (
        <div className="flex items-center justify-center gap-1">
          <p className="text-center">
            You need to be logged in to add a comment
          </p>
          <SignInButton
            mode="modal"
            forceRedirectUrl={`${routes.feedback}/${id}`}
          >
            <button className="text-xs font-bold text-@purple-500">
              Sign in
            </button>
          </SignInButton>
        </div>
      )}
    </div>
  )
}
