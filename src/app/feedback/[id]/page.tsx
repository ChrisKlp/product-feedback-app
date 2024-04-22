import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedbackData } from '@/lib/utils'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default function SingleFeedbackPage({ params: { id } }: Props) {
  const data = getFeedbackData(+id)

  if (!data) {
    notFound()
  }

  return (
    <section>
      <FeedbackCard data={data} className="pointer-events-none" />
    </section>
  )
}
