import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import { type Feedback, Status } from '@/types'
import { statuses } from '@/utils/statuses'
import { getStatusData } from '@/utils/utils'

type Props = {
  data: Feedback[]
  activeStatus?: Status
}

export default function RoadmapColumn({ data, activeStatus }: Props) {
  const statusData = getStatusData(activeStatus ?? Status.Planned)
  return (
    <section>
      <header className="mb-6 grid gap-1 lg:mb-8">
        <h2 className="h2 text-[18px] md:text-[14px] lg:text-[18px]">{`${statusData?.name} (${data.length || 0})`}</h2>
        <p>{statusData?.description}</p>
      </header>
      <div className="grid gap-4 lg:gap-8">
        {data.map((feedback) => {
          const status =
            statuses.find(
              (status) =>
                status.name.toLowerCase() === feedback.status.toLowerCase(),
            ) ?? statuses[0]!
          return (
            <FeedbackCard
              key={feedback.id}
              data={feedback}
              showStatus={true}
              color={status.color}
            />
          )
        })}
      </div>
    </section>
  )
}
