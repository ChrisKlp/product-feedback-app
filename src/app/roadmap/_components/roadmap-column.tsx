import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import type { ClientStatusData, TFeedback } from '@/types'

type Props = {
  data: TFeedback[]
  statusData: ClientStatusData
}

export default function RoadmapColumn({ data, statusData }: Props) {
  return (
    <section>
      <header className="mb-6 grid gap-1 lg:mb-8">
        <h2 className="h2 text-[18px] md:text-[14px] lg:text-[18px]">{`${statusData?.name} (${data.length || 0})`}</h2>
        <p>{statusData.description}</p>
      </header>
      <div className="grid gap-4 lg:gap-8">
        {data.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            data={feedback}
            withStatus={true}
            color={statusData.color}
          />
        ))}
      </div>
    </section>
  )
}
