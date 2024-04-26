import GoBackLink from '@/components/GoBackLink/GoBackLink'
import AddFeedbackButton from '@/components/actionButtons/AddFeedbackButton/AddFeedbackButton'

export default function RoadmapHeader() {
  return (
    <header className="flex h-[100px] items-center bg-@blue-900 px-6 md:h-[113px] md:rounded-[10px] md:px-8">
      <nav className="grid flex-1 gap-1">
        <GoBackLink />
        <h1 className="h1 text-[18px] text-white md:text-2xl">Roadmap</h1>
      </nav>
      <AddFeedbackButton />
    </header>
  )
}
