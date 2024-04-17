import RoadmapGrid from '@/components/Roadmap/RoadmapGrid'
import RoadmapTabs from '@/components/Roadmap/RoadmapTabs/RoadmapTabs'
import mockedData from '@/mockedData.json'

const data = mockedData.productRequests

export default function RoadmapPage() {
  return (
    <>
      <RoadmapTabs data={data} className="md:hidden" />
      <RoadmapGrid data={data} />
    </>
  )
}
