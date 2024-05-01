import { notFound } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'
import { getFeedback } from '@/data-access/feedbacks'
import EditFeedbackForm from './_components/edit-feedback-form'

type Props = { params: { id: string } }
export default async function NewFeedbackPage({ params: { id } }: Props) {
  noStore()
  const feedbackData = await getFeedback(id)

  if (!feedbackData) {
    notFound()
  }

  return (
    <>
      <h1 className="h1 mb-6 text-[18px]">{`Editing '${feedbackData.title}'`}</h1>
      <EditFeedbackForm initialValues={feedbackData} />
    </>
  )
}
