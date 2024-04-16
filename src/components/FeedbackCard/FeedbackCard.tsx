'use client'

import { Feedback } from '@/types'
import { CategoryTag } from '@/components/CategoryTag/CategoryTag'
import UpvoteButton from '@/components/UpvoteButton/UpvoteButton'
import CommentsIcon from '@/assets/shared/icon-comments.svg'
import styles from './FeedbackCard.module.css'
import { cn } from '@/utils/utils'
import { useRouter } from 'next/navigation'
import routes from '@/utils/routes'

type Props = {
  data: Feedback
  color?: string
  showStatus?: boolean
  className?: string
}

export default function FeedbackCard({
  data,
  color = '#AD1FEA',
  showStatus = false,
  className,
}: Props) {
  const router = useRouter()
  const commentsCount = data.comments?.length || 0
  return (
    <article
      role="button"
      className={cn('@container/card group/title', className)}
      onClick={() => {
        router.push(`${routes.feedback}/${data.id}`)
      }}
    >
      <div
        className={cn(
          'rounded-dlg @xl/card:px-8 @xl/card:py-7 relative bg-white p-6 lg:px-8',
          showStatus && 'lg:p-8 lg:pt-6',
        )}
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
            <h3
              className={cn(styles.title, 'h3 group-hover/title:text-blue500')}
            >
              {data.title}
            </h3>
            <p className={styles.description}>{data.description}</p>
            <CategoryTag name={data.category} />
          </div>
          <UpvoteButton
            value={data.upvotes || 0}
            className={cn(styles.upvoteWrapper, 'pointer-events-auto')}
            onClick={() => {
              console.log(data.upvotes)
            }}
          />
          <div className={styles.commentsWrapper}>
            <CommentsIcon className="text-blue300" />
            <span className={styles.commentsCount}>{commentsCount}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
