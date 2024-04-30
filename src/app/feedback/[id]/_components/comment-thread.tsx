import Comment from '../../../../components/Comment/Comment'
import { cn } from '@/lib/utils'
import type { TComment } from '@/types'

type Props = {
  data: TComment
  isSeparatorHidden?: boolean
}

export default function CommentThread({
  data,
  isSeparatorHidden = false,
}: Props) {
  const hasChildren = data.children && data.children.length > 0
  return (
    <div className={cn('relative', !isSeparatorHidden && 'pb-6 md:pb-8')}>
      <Comment data={data} />
      {!isSeparatorHidden && !hasChildren && <Separator />}
      {hasChildren && (
        <div className="relative mt-6 md:[position:unset]">
          <div className="absolute bottom-1/3 left-0 top-0 w-[1px] bg-@blue-700 opacity-20 md:left-[19px] md:top-[63px]" />
          <div className="ml-6 grid gap-6 md:ml-11">
            {data.children?.map((child) => (
              <Comment key={child.id} data={child} />
            ))}
          </div>
        </div>
      )}
      {!isSeparatorHidden && hasChildren && <Separator />}
    </div>
  )
}

const Separator = () => (
  <div className="mt-6 h-[1px] w-full bg-@blue-700 opacity-20 md:mt-8" />
)
