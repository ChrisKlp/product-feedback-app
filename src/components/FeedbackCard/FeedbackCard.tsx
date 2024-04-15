import { Feedback } from '@/types'
import { CategoryTag } from '@/components/CategoryTag/CategoryTag'
import UpvoteButton from '@/components/UpvoteButton/UpvoteButton'
import CommentsIcon from '@/assets/shared/icon-comments.svg'
import styles from './FeedbackCard.module.css'
import { cn } from '@/utils/utils'

type Props = {
  data: Feedback
  showStatus?: boolean
}

export default function FeedbackCard({ data, showStatus = false }: Props) {
  const commentsCount = 2
  return (
    <article className={styles.container}>
      {showStatus && (
        <>
          <div className={styles.statusBar} />
          <div className={styles.statusWrapper}>
            <span className={styles.statusDot} />
            <p className="capitalize">{data.status}</p>
          </div>
        </>
      )}
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h3 className={cn(styles.title, 'h3')}>{data.title}</h3>
          <p className="mb-2">{data.description}</p>
          <CategoryTag name={data.category} />
        </div>
        <UpvoteButton value={112} className={styles.upvoteWrapper} />
        <div className={styles.commentsWrapper}>
          <CommentsIcon className="text-blue300" />
          <span className={styles.commentsCount}>{commentsCount}</span>
        </div>
      </div>
    </article>
  )
}
