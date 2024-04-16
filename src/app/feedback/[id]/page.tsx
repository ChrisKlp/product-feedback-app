import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedbackData } from '@/utils/utils'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default function FeedbackPage({ params: { id } }: Props) {
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
