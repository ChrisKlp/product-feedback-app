'use client'

import { SignInButton as SignInClerkButton } from '@clerk/nextjs'
import SignInIcon from '@/assets/shared/icon-sign-in.svg'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function SignInButton({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <SignInClerkButton mode="modal" forceRedirectUrl={pathname}>
      <button
        className={cn('btn flex items-center justify-center gap-2', className)}
      >
        <SignInIcon fill="white" width="18" height="18" />
        Sign In
      </button>
    </SignInClerkButton>
  )
}
