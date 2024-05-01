import { unstable_noStore as noStore } from 'next/cache'
import RoadmapGrid from './_components/roadmap-grid'
import RoadmapMobileTabs from './_components/roadmap-mobile-tabs/roadmap-mobile-tabs'
import { getFeedbacks } from '@/data-access/feedbacks'
import type { TFeedback } from '@/types'
import { getStatuses } from '@/lib/statuses'
import { getRoadmapData } from '@/lib/utils'

export default async function RoadmapPage() {
  noStore()
  const allFeedbacks: TFeedback[] = await getFeedbacks()
  const roadmapData = getRoadmapData(allFeedbacks)
  const statusData = getStatuses(roadmapData.statusData)

  return (
    <>
      <RoadmapMobileTabs
        data={roadmapData.feedbacks}
        statusData={statusData}
        className="md:hidden"
      />
      <RoadmapGrid data={roadmapData.feedbacks} statusData={statusData} />
    </>
  )
}
