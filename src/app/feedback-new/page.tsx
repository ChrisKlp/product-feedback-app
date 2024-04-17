import NewFeedbackForm from '@/components/NewFeedbackForm/NewFeedbackForm'
import Image from 'next/image'

export default function NewFeedbackPage() {
  return (
    <section className="relative rounded-[10px] bg-white p-6 pt-11">
      <Image
        src={'./assets/icon-new-feedback.svg'}
        width={56}
        height={56}
        className="absolute -top-5 w-10 md:-top-7 md:w-14"
        alt="add icon"
      />
      <h1 className="h1 mb-6 text-[18px]">Create New Feedback</h1>
      <NewFeedbackForm />
    </section>
  )
}
