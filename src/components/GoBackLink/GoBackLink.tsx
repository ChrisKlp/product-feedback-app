'use client'

import ArrowIcon from '@/assets/shared/icon-arrow-left.svg'
import { useRouter } from 'next/navigation'

export default function GoBackLink() {
  const router = useRouter()
  return (
    <button
      className="text-blue300 flex items-center gap-4"
      onClick={() => router.back()}
    >
      <ArrowIcon />
      <span className="text-[13px] font-bold text-white">Go Back</span>
    </button>
  )
}
