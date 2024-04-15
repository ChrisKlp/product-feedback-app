'use client'

import Image from 'next/image'
import backgroundHeader from '@/assets/suggestions/mobile/background-header.png'
import HamburgerMenu from '@/assets/shared/mobile/icon-hamburger.svg'
import IconClose from '@/assets/shared/mobile/icon-close.svg'
import styles from './Header.module.css'
import Link from 'next/link'
import { CategoryButtonTag } from '../CategoryTag/CategoryTag'
import Status from './Status'
import { statuses } from '@/utils/statuses'
import { useState } from 'react'
import { cn } from '@/utils/utils'
import HeaderBackground from './HeaderBackground'

const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={styles.wrapper}>
      <section className={styles.logoWrapper}>
        <HeaderBackground />
        <div className={styles.logoGroup}>
          <div>
            <h1 className={cn(styles.logoTitle)}>Frontend Mentor</h1>
            <p className={styles.logoSubtitle}>Feedback Board</p>
          </div>
          <button className={styles.navButton} onClick={toggleMenu}>
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
              isSelected={i === 0}
              className="mb-[6px]"
            />
          ))}
        </div>
        <div className={styles.statusWrapper}>
          <div className={styles.statusHeader}>
            <p className={styles.statusTitle}>Roadmap</p>
            <Link href={''} className={styles.statusLink}>
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
