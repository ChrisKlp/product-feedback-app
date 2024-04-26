import CommentsIcon from '@/assets/shared/icon-comments.svg'
import { CategoryTag } from '@/components/CategoryTag/CategoryTag'
import UpvoteButton from '@/components/UpvoteButton/UpvoteButton'
import type { TFeedback, TFeedbackWithComments } from '@/types'
import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { statusColors } from 'tailwind.config'
import Link from 'next/link'

type Props = {
  data: TFeedback | TFeedbackWithComments
  color?: string
  withStatus?: boolean
  withLinks?: boolean
  className?: string
}

export default function FeedbackCard({
  data,
  color = statusColors.sPurple,
  withStatus = false,
  withLinks = true,
  className,
}: Props) {
  const href = `${routes.feedback}/${data.id}`

  return (
    <article className={className}>
      <div
        className={cn(
          // default styles
          'relative rounded-dlg bg-white p-6',
          // optional styles
          !withStatus ? 'md:px-8 md:py-7' : 'md:p-8',
        )}
      >
        {withStatus && (
          <>
            <div
              className="absolute left-0 right-0 top-0 h-[6px] rounded-t-[5px]"
              style={{ backgroundColor: color }}
            />
            <div className="mb-4 flex items-center gap-2 md:mb-[14px] lg:mb-2 lg:gap-4">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <p className="capitalize">{data.status}</p>
            </div>
          </>
        )}
        <div
          className={cn(
            // default styles
            "relative grid grid-cols-2 justify-items-start gap-4 [grid-template-areas:'content_content''upvote_comments']",
            // optional styles
            !withStatus &&
              "md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:items-start md:gap-10 md:[grid-template-areas:'upvote_content_comments']",
          )}
        >
          <div className="relative [grid-area:_content]">
            <Link
              href={href}
              className={cn('group', !withLinks && 'pointer-events-none')}
            >
              <h3
                className={cn(
                  // default styles
                  'h3 mb-2 font-bold transition-colors group-hover:text-@blue-500 lg:mb-1 lg:text-[18px]',
                  // optional styles
                  !withStatus && 'md:mb-1 md:text-[18px]',
                )}
              >
                {data.title}
              </h3>
            </Link>
            <p
              className={cn(
                // default styles
                'mb-2 lg:mb-3',
                // optional styles
                !withStatus ? 'md:mb-3 md:text-base' : 'md:mb-6',
              )}
            >
              {data.description}
            </p>
            <CategoryTag name={data.category} />
          </div>
          <UpvoteButton
            data={data}
            withStatus={withStatus}
            className={cn('relative [grid-area:_upvote]')}
          />
          <Link
            href={href}
            className={cn(
              'flex items-center gap-2 self-center justify-self-end [grid-area:_comments]',
              !withLinks && 'pointer-events-none',
            )}
          >
            <CommentsIcon className="text-@blue-300" />
            <span className="text-xs font-bold text-@blue-800 lg:text-base">
              {data.commentsCount}
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
