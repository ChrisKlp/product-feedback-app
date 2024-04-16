import { Feedback } from '@/types'
import RoadmapGrid from './RoadmapGrid'
import RoadmapTabs from './RoadmapTabs/RoadmapTabs'

type Props = {
  data: Feedback[]
}

export default function RoadmapContent({ data }: Props) {
  return (
    <>
      <RoadmapTabs data={data} className="md:hidden" />
      <RoadmapGrid data={data} />
    </>
  )
}
