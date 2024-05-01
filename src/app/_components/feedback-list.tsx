import { auth } from '@clerk/nextjs/server'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import NoFeedback from '@/components/NoFeedback/NoFeedback'
import { getUserVotes } from '@/data-access/votes'
import { type SVotes } from '@/db/schema'
import { type TFeedback } from '@/types'
import { unstable_noStore as noStore } from 'next/cache'

type Props = {
  data: TFeedback[]
}

export default async function FeedbackList({ data }: Props) {
  noStore()
  const { userId } = auth()
  const userVotes: SVotes[] = await getUserVotes(userId)

  return (
    <>
      <div className="grid gap-4 px-6 pb-[55px] pt-8 md:px-0 md:pb-[120px] md:pt-6">
        {data.length ? (
          <>
            {data.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                data={feedback}
                userVotes={userVotes}
              />
            ))}
          </>
        ) : (
          <NoFeedback />
        )}
      </div>
    </>
  )
}
