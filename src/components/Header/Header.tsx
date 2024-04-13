import Image from 'next/image'
import backgroundHeader from '@/assets/suggestions/mobile/background-header.png'
import HamburgerMenu from '@/assets/shared/mobile/icon-hamburger.svg'
import IconClose from '@/assets/shared/mobile/icon-close.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className="w-full">
      <div className={styles.logoContainer}>
        <Image
          alt="background header"
          src={backgroundHeader}
          fill
          className="object-cover"
        />
        <div className={styles.logoWrapper}>
          <div>
            <p className={styles.logoTitle}>Frontend Mentor</p>
            <p className={styles.logoSubtitle}>Feedback Board</p>
          </div>
          <button className="-mr-1 p-1">
            <HamburgerMenu className="flex" />
          </button>
        </div>
      </div>
      <div className="absolute hidden">
        <div>
          <p>filters</p>
        </div>
        <div>
          <p>Roadmap</p>
        </div>
      </div>
    </header>
  )
}
