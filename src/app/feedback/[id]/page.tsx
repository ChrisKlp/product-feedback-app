import CommentWrapper from '@/components/Comment/CommentWrapper'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedback } from '@/data-access/feedbacks'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default async function SingleFeedbackPage({ params: { id } }: Props) {
  const feedbackData = await getFeedback(id)

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
            <CommentWrapper
              key={comment.id}
              data={comment}
              isSeparatorHidden={i === arr.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
