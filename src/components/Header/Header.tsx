'use client'

import IconClose from '@/assets/shared/mobile/icon-close.svg'
import HamburgerMenu from '@/assets/shared/mobile/icon-hamburger.svg'
import { useActiveCategoryStore } from '@/hooks/useActiveCategoryStore'
import useMediaQuery from '@/hooks/useMediaQuery'
import { statuses } from '@/utils/statuses'
import { IS_SERVER, cn } from '@/utils/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CategoryButtonTag } from '../CategoryTag/CategoryTag'
import styles from './Header.module.css'
import HeaderBackground from './HeaderBackground'
import Status from './Status'
import routes from '@/utils/routes'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isTablet = useMediaQuery('(min-width: 768px)')
  const activeCategory = useActiveCategoryStore((state) => state.activeCategory)
  const categories = useActiveCategoryStore((state) => state.categories)
  const setCategory = useActiveCategoryStore((state) => state.setCategory)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeNav = () => setIsOpen(false)

  useEffect(() => {
    if (!IS_SERVER) {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (isTablet && isOpen) {
      closeNav()
    }
  }, [isTablet])

  return (
    <header className={cn(styles.wrapper)}>
      <section className={styles.logoWrapper}>
        <HeaderBackground />
        <div className={styles.logoGroup}>
          <div>
            <h1 className={cn(styles.logoTitle)}>Frontend Mentor</h1>
            <p className={styles.logoSubtitle}>Feedback Board</p>
          </div>
          <button
            type="button"
            className={styles.navButton}
            onClick={toggleMenu}
          >
            {isOpen ? <IconClose /> : <HamburgerMenu />}
          </button>
        </div>
      </section>
      {isOpen && (
        <div className={cn(styles.backdrop, isOpen ? 'block' : 'hidden')} />
      )}
      <div
        className={cn(
          styles.headerPanel,
          isOpen ? 'translate-x-0' : 'translate-x-[270px]',
        )}
      >
        <div className={styles.categoryWrapper}>
          {categories.map((category, i) => (
            <CategoryButtonTag
              key={category}
              name={category}
              isSelected={category === activeCategory}
              className="mb-[6px]"
              onSelected={() => setCategory(category)}
            />
          ))}
        </div>
        <div className={styles.statusWrapper}>
          <div className={styles.statusHeader}>
            <p className={styles.statusTitle}>Roadmap</p>
            <Link
              onClick={closeNav}
              href={routes.roadmap}
              className={styles.statusLink}
            >
              View
            </Link>
          </div>
          {statuses.map((status, i) => (
            <Status key={status.name} status={status} count={i} />
          ))}
        </div>
      </div>
    </header>
  )
}
