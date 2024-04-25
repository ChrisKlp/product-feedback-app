import Comment from './Comment'
import { cn } from '@/lib/utils'
import type { TComment } from '@/types'

type Props = {
  data: TComment
  isSeparatorHidden?: boolean
}

export default function CommentWrapper({
  data,
  isSeparatorHidden = false,
}: Props) {
  const hasChildren = data.children && data.children.length > 0
  return (
    <div className={cn('relative', !isSeparatorHidden && 'pb-6 md:pb-8')}>
      <Comment data={data} />
      {!isSeparatorHidden && !hasChildren && <Separator />}
      {hasChildren && (
        <div className="mt-6 grid grid-flow-col gap-6 md:block">
          <div className="bottom-1/3 w-[1px] bg-@blue-700 opacity-20 md:absolute md:left-[19px] md:top-[63px]" />
          <div className="grid gap-6 md:ml-11">
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
