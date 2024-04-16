import RoadmapContent from '@/components/Roadmap/RoadmapContent'
import RoadmapGrid from '@/components/Roadmap/RoadmapGrid'
import mockedData from '@/mockedData.json'

let data = mockedData.productRequests

export default function RoadmapPage() {
  return <RoadmapContent data={data} />
}
