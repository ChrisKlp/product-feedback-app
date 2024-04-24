import mockedData from '@/mockedData.json'
import Header from '@/app/_components/header/header'
import FeedbackList from '@/app/_components/feedback-list'
import { statuses } from '@/lib/statuses'

const data = mockedData.productRequests
const newStatuses = statuses.map((status) => ({
  ...status,
  count: data.filter(
    (feedback) => feedback.status.toLowerCase() === status.name.toLowerCase(),
  ).length,
}))

export default function Home() {
  return (
    <div className="c-container grid md:px-10 md:pt-14 lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px] lg:pt-[94px]">
      <Header statuses={newStatuses} />
      <main>
        <FeedbackList data={data} />
      </main>
    </div>
  )
}
