import type { StatusData, TFeedback } from '@/types'
import RoadmapGrid from './_components/roadmap-grid'
import RoadmapMobileTabs from './_components/roadmap-mobile-tabs/roadmap-mobile-tabs'
import {
  getFeedbackStatusData,
  getFeedbacksWithRoadmapStatus,
} from '@/data-access/feedbacks'
import { getStatuses } from '@/lib/statuses'

export default async function RoadmapPage() {
  const feedbackData: TFeedback[] = await getFeedbacksWithRoadmapStatus()
  const feedbackStatusData: StatusData = await getFeedbackStatusData()
  const statusData = getStatuses(feedbackStatusData)

  return (
    <>
      <RoadmapMobileTabs
        data={feedbackData}
        statusData={statusData}
        className="md:hidden"
      />
      <RoadmapGrid data={feedbackData} statusData={statusData} />
    </>
  )
}
