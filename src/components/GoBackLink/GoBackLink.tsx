'use client'

import ArrowIcon from '@/assets/shared/icon-arrow-left.svg'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

type Props = {
  theme?: 'dark' | 'light'
  pushRoute?: string
}

export default function GoBackLink({ theme = 'dark', pushRoute }: Props) {
  const router = useRouter()
  const isLightTheme = theme === 'light'
  return (
    <button
      className={cn(
        'flex items-center gap-4 text-@blue-300',
        isLightTheme && 'text-@blue-500',
      )}
      onClick={() => {
        if (pushRoute) {
          router.push(pushRoute)
        } else {
          router.back()
        }
      }}
    >
      <ArrowIcon />
      <span
        className={cn(
          'line-clamp-1 text-xs font-bold text-white lg:text-[14px]',
          isLightTheme && 'text-@gray',
        )}
      >
        Go Back
      </span>
    </button>
  )
}
