import { auth } from '@clerk/nextjs/server'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import NoFeedback from '@/components/NoFeedback/NoFeedback'
import { getFeedbacks } from '@/data-access/feedbacks'
import { getUserVotes } from '@/data-access/votes'
import { type SVotes, categoryEnum } from '@/db/schema'
import { SortOption, type TFeedback } from '@/types'

type Props = {
  searchParams: { category?: string; sort?: string }
}

export default async function FeedbackList({ searchParams }: Props) {
  const category = searchParams.category ?? categoryEnum.enumValues[0]
  const sort = searchParams.sort ?? SortOption.MOST_UPVOTES
  const { userId } = auth()

  const feedbackData: TFeedback[] = await getFeedbacks(category, sort)
  const userVotes: SVotes[] = await getUserVotes(userId)

  return (
    <>
      <div className="grid gap-4 px-6 pb-[55px] pt-8 md:px-0 md:pb-[120px] md:pt-6">
        {feedbackData.length ? (
          <>
            {feedbackData.map((feedback) => (
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
