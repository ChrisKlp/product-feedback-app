import FeedbackList from '@/app/_components/feedback-list'
import { getFeedbackStatusData } from '@/data-access/feedbacks'
import { type StatusData } from '@/types'
import Header from './_components/header/header'
import SortingBar from './_components/sorting-bar'

type Props = {
  searchParams: { category?: string; sort?: string }
}

export default async function Home({ searchParams }: Props) {
  const statusData: StatusData = await getFeedbackStatusData()

  return (
    <div className="c-container grid md:px-10 md:pt-14 lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px] lg:pt-[94px]">
      <Header statusData={statusData} />
      <main>
        <SortingBar counter={statusData.total} />
        <FeedbackList searchParams={searchParams} />
      </main>
    </div>
  )
}
