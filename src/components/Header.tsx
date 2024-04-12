import Image from 'next/image'
import backgroundHeader from '@/assets/suggestions/mobile/background-header.png'
import HamburgerMenu from '@/assets/shared/mobile/icon-hamburger.svg'
import IconClose from '@/assets/shared/mobile/icon-close.svg'

export default function Header() {
  return (
    <header className="w-full">
      <div className="relative h-[72px]">
        <Image
          alt="background header"
          src={backgroundHeader}
          fill
          className="object-cover"
        />
        <div className="relative flex h-full w-full items-center justify-between px-[24px] text-white">
          <div>
            <p className="text-[15px] font-bold">Frontend Mentor</p>
            <p className="text-[13px] font-medium opacity-75">Feedback Board</p>
          </div>
          <HamburgerMenu className="flex" />
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
