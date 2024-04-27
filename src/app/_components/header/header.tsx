'use client'

import { useEffect, useState } from 'react'
import HeaderLogoPanel from './header-logo-panel'
import { cn } from '@/lib/utils'
import { SignedOut } from '@clerk/nextjs'
import HeaderCategoriesPanel from './header-categories-panel'
import HeaderRoadmapPanel from './header-roadmap-panel'
import type { StatusData } from '@/types'
import SignInButton from '@/components/actionButtons/SignInButton/SignInButton'

type Props = {
  statusData: StatusData
}

export default function Header({ statusData }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (window !== undefined) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className="w-full md:grid md:grid-cols-3 md:gap-[10px] md:pb-10 lg:grid-cols-1 lg:content-start lg:gap-6">
      <HeaderLogoPanel isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <div
          className={cn(
            'fixed z-50 h-full w-full bg-black opacity-50 animate-in fade-in-0 md:hidden',
          )}
          onClick={closeMenu}
        />
      )}
      <div
        className={cn(
          // default styles
          'fixed bottom-0 right-0 top-[72px] z-50 grid w-[270px] content-start gap-6 bg-@blue-100 p-6 transition-transform duration-300',
          // md-screen styles
          'md:relative md:top-0 md:col-[2_/_span_2] md:w-full md:translate-x-0 md:grid-flow-col md:grid-cols-2 md:gap-[10px] md:bg-transparent md:p-0',
          // lg-screen styles
          'lg:col-span-1 lg:grid-cols-1 lg:grid-rows-2 lg:gap-6',
          // close/open animation
          isMenuOpen ? 'translate-x-0' : 'translate-x-[270px]',
        )}
      >
        <div className="contents md:hidden">
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <HeaderCategoriesPanel closeMenu={closeMenu} />
        <HeaderRoadmapPanel closeMenu={closeMenu} statusData={statusData} />
      </div>
    </header>
  )
}
