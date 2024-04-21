'use client'

import ArrowIcon from '@/assets/shared/icon-arrow-left.svg'
import { cn } from '@/utils/utils'
import { useRouter } from 'next/navigation'

type Props = {
  theme?: 'dark' | 'light'
}

export default function GoBackLink({ theme = 'dark' }: Props) {
  const router = useRouter()
  const isLightTheme = theme === 'light'
  return (
    <button
      className={cn(
        'flex items-center gap-4 text-@blue-300',
        isLightTheme && 'text-@blue-500',
      )}
      onClick={() => router.back()}
    >
      <ArrowIcon />
      <span
        className={cn(
          'text-[13px] font-bold text-white lg:text-[14px]',
          isLightTheme && 'text-@gray',
        )}
      >
        Go Back
      </span>
    </button>
  )
}
