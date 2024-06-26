import { unstable_noStore as noStore } from 'next/cache'
import CreateFeedbackForm from './_components/create-feedback-form'

export default function NewFeedbackPage() {
  noStore()
  return (
    <>
      <h1 className="h1 mb-6 text-[18px]">Create New Feedback</h1>
      <CreateFeedbackForm />
    </>
  )
}
