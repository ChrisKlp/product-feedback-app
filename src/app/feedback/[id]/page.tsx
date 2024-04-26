import CommentThread from '@/app/feedback/[id]/_components/comment-thread'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFullFeedback } from '@/data-access/feedbacks'
import { notFound } from 'next/navigation'
import AddCommentForm from './_components/add-comment-form'

type Props = { params: { id: string } }

export default async function SingleFeedbackPage({ params: { id } }: Props) {
  const feedbackData = await getFullFeedback(id)

  if (!feedbackData) {
    notFound()
  }

  return (
    <div className="grid gap-6">
      <FeedbackCard data={feedbackData} withLinks={false} />
      <section className="rounded-dlg bg-white p-6 md:px-8 md:pb-8">
        <h2 className="h2 mb-6 text-[18px] md:mb-7">{`${feedbackData.commentsCount} Comments`}</h2>
        <div>
          {feedbackData.comments.map((comment, i, arr) => (
            <CommentThread
              key={comment.id}
              data={comment}
              isSeparatorHidden={i === arr.length - 1}
            />
          ))}
        </div>
      </section>
      <AddCommentForm />
    </div>
  )
}
