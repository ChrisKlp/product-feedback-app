import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { getFeedbackData } from '@/utils/utils'
import { notFound } from 'next/navigation'

type Props = { params: { id: string } }

export default function NewFeedbackPage({ params: { id } }: Props) {
  return (
    <section>
      <p>new</p>
    </section>
  )
}
