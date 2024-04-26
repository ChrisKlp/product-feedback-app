import Image from 'next/image'
import ReplayButton from './ReplayButton'
import { getMockedUser } from '@/lib/utils'
import { type TComment } from '@/types'

type Props = {
  data: TComment
}

export default function Comment({ data }: Props) {
  const user = getMockedUser(data.userId)
  return (
    <article>
      <header className="mb-4 flex w-full items-center gap-4 md:gap-8">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          {user && <Image alt="avatar" sizes="40px" src={user.image} fill />}
        </div>
        <div className="flex-1">
          <p className="font-bold text-@blue-800 md:text-[14px]">
            {user?.name}
          </p>
          <p className="md:text-[14px]">@{user?.username}</p>
        </div>
        <ReplayButton />
      </header>

      <p className="md:pl-[72px] md:text-[15px]">
        {data.replyingTo && (
          <span className="font-bold text-@purple-500">{`@${data.replyingTo} `}</span>
        )}
        {data.content}
      </p>
    </article>
  )
}
