import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedback } from '@/data-access/feedbacks'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default async function SingleFeedbackPage({ params: { id } }: Props) {
  const feedbackData = await getFeedback(id)

  console.log(feedbackData)

  if (!feedbackData) {
    notFound()
  }

  return (
    <section>
      <FeedbackCard data={feedbackData} withLinks={false} />
    </section>
  )
}
