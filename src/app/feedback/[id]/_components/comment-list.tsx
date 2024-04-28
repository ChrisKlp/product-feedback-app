import { getComments } from '@/data-access/comments'
import CommentThread from './comment-thread'

type Props = {
  feedbackId: string
  commentsCount: number
}

export default async function CommentList({
  feedbackId,
  commentsCount,
}: Props) {
  const commentsData = await getComments(feedbackId)

  if (!commentsData) {
    return null
  }

  return (
    <section className="rounded-dlg bg-white p-6 md:px-8 md:pb-8">
      <h2 className="h2 mb-6 text-[18px] md:mb-7">{`${commentsCount} Comments`}</h2>
      <div>
        {commentsData.map((comment, i, arr) => (
          <CommentThread
            key={comment.id}
            data={comment}
            isSeparatorHidden={i === arr.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
