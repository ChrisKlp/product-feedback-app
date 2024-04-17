import EmptyImage from '@/assets/suggestions/illustration-empty.svg'
import AddFeedbackButton from '@/components/buttons/AddFeedbackButton'

export default function NoFeedback() {
  return (
    <section className="grid justify-items-center rounded-dlg bg-white px-6 py-[76px] text-center">
      <EmptyImage className="mb-10" />
      <h1 className="h1 mb-[14px] text-[18px]">There is no feedback yet.</h1>
      <p className="mb-6">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <AddFeedbackButton />
    </section>
  )
}
