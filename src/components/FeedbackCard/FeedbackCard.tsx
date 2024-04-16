import { Feedback } from '@/types'
import { CategoryTag } from '@/components/CategoryTag/CategoryTag'
import UpvoteButton from '@/components/UpvoteButton/UpvoteButton'
import CommentsIcon from '@/assets/shared/icon-comments.svg'
import styles from './FeedbackCard.module.css'
import { cn } from '@/utils/utils'

type Props = {
  data: Feedback
  color?: string
  showStatus?: boolean
}

export default function FeedbackCard({
  data,
  color = '#AD1FEA',
  showStatus = false,
}: Props) {
  const commentsCount = data.comments?.length || 0
  return (
    <article
      role="button"
      className={cn(styles.wrapper, 'group/title')}
      onClick={() => {
        console.log('click')
      }}
    >
      {showStatus && (
        <>
          <div
            className={styles.statusBar}
            style={{ backgroundColor: color }}
          />
          <div className={styles.statusWrapper}>
            <span
              className={styles.statusDot}
              style={{ backgroundColor: color }}
            />
            <p className="capitalize">{data.status}</p>
          </div>
        </>
      )}
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h3 className={cn(styles.title, 'h3 group-hover/title:text-blue500')}>
            {data.title}
          </h3>
          <p className="mb-2 md:mb-3">{data.description}</p>
          <CategoryTag name={data.category} />
        </div>
        <UpvoteButton
          value={data.upvotes || 0}
          className={styles.upvoteWrapper}
          onClick={() => {
            console.log(data.upvotes)
          }}
        />
        <div className={styles.commentsWrapper}>
          <CommentsIcon className="text-blue300" />
          <span className={styles.commentsCount}>{commentsCount}</span>
        </div>
      </div>
    </article>
  )
}
