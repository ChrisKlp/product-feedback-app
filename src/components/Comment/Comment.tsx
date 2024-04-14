import avatar from '@/assets/user-images/image-elijah.jpg'
import { TComment } from '@/types'
import Image from 'next/image'

type Props = {
  data: TComment
}

export default function Comment({ data }: Props) {
  return (
    <article>
      <header className="mb-4 flex w-full items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image alt="avatar" src={avatar} fill />
        </div>
        <div className="flex-1">
          <p className="text-darkBlue800 font-bold">{data.user.name}</p>
          <p>@{data.user.username}</p>
        </div>
        <button className="text-blue500 text-[13px] font-semibold">
          Reply
        </button>
      </header>
      <p>{data.content}</p>
    </article>
  )
}