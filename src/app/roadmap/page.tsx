import RoadmapGrid from '@/app/roadmap/_components/roadmap-grid'
import RoadmapMobileTabs from '@/app/roadmap/_components/roadmap-mobile-tabs/roadmap-mobile-tabs'
import mockedData from '@/mockedData.json'

const data = mockedData.productRequests

export default function RoadmapPage() {
  return (
    <>
      <RoadmapMobileTabs data={data} className="md:hidden" />
      <RoadmapGrid data={data} />
    </>
  )
}
