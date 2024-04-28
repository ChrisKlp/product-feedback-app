'use client'
import Image from 'next/image'
import { type TComment } from '@/types'
import { SignedIn } from '@clerk/nextjs'
import ReplyForm from './ReplyForm'
import { useState } from 'react'

type Props = {
  data: TComment
}

export default function Comment({ data }: Props) {
  const [isReplyOpen, setIsReplyOpen] = useState(false)
  return (
    <article>
      <header className="mb-4 flex w-full items-center gap-4 md:gap-8">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          {data.user ? (
            <Image alt="avatar" sizes="40px" src={data.user.image} fill />
          ) : (
            <div className="size-full bg-@blue-300" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-bold text-@blue-800 md:text-[14px]">
            {data.user?.name ?? data.user?.username}
          </p>
          <p className="md:text-[14px]">@{data.user?.username}</p>
        </div>
        <SignedIn>
          <button
            type="button"
            className="text-xs font-semibold text-@blue-500"
            onClick={() => setIsReplyOpen((prev) => !prev)}
          >
            {isReplyOpen ? 'Cancel' : 'Reply'}
          </button>
        </SignedIn>
      </header>

      <p className="md:pl-[72px] md:text-[15px]">
        {data.replyingTo && (
          <span className="font-bold text-@purple-500">{`@${data.replyingTo} `}</span>
        )}
        {data.content}
      </p>
      {isReplyOpen && <ReplyForm data={data} className="md:ml-[72px]" />}
    </article>
  )
}
