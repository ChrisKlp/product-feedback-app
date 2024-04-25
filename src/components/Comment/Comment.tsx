import Image from 'next/image'
import ReplayButton from './ReplayButton'
import type { SComment } from '@/db/schema'
import { cn, getMockedUser } from '@/lib/utils'

type Props = {
  data: SComment
  isSeparatorHidden?: boolean
}

export default function Comment({ data, isSeparatorHidden = false }: Props) {
  const user = getMockedUser(data.userId)
  return (
    <article className={cn(!isSeparatorHidden && 'mb-6 md:mb-8')}>
      <header className="mb-4 flex w-full items-center gap-4 md:gap-8">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          {user && <Image alt="avatar" src={user.image} fill />}
        </div>
        <div className="flex-1">
          <p className="font-bold text-@blue-800 md:text-[14px]">
            {user?.name}
          </p>
          <p className="md:text-[14px]">{user?.username}</p>
        </div>
        <ReplayButton />
      </header>
      <p className="md:text-[15px]">{data.content}</p>
      {!isSeparatorHidden && (
        <div className="mt-6 h-[1px] w-full bg-@blue-700 opacity-20 md:mt-8" />
      )}
    </article>
  )
}
