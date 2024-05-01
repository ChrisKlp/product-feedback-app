import { unstable_noStore as noStore } from 'next/cache'
import FeedbackList from '@/app/_components/feedback-list'
import { getFeedbacks } from '@/data-access/feedbacks'
import Header from './_components/header/header'
import SortingBar from './_components/sorting-bar'
import type { TFeedback } from '@/types'
import { getRoadmapData, getSuggestionsData } from '@/lib/utils'

type Props = {
  searchParams: { category?: string; sort?: string }
}

export default async function Home({
  searchParams: { category, sort },
}: Props) {
  noStore()
  const allFeedbacks: TFeedback[] = await getFeedbacks(category, sort)
  const suggestionsData = getSuggestionsData(allFeedbacks)
  const roadmapData = getRoadmapData(allFeedbacks)

  return (
    <div className="c-container grid md:px-10 md:pt-14 lg:grid-flow-col lg:grid-cols-[255px_1fr] lg:gap-[30px] lg:pt-[94px]">
      <Header statusData={roadmapData.statusData} />
      <main>
        <SortingBar counter={suggestionsData.count} />
        <FeedbackList data={suggestionsData.feedbacks} />
      </main>
    </div>
  )
}
