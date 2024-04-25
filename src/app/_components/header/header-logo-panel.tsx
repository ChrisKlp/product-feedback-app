import mobileBg from '@/assets/suggestions/mobile/background-header.png'
import tabletBG from '@/assets/suggestions/tablet/background-header.png'
import desktopBg from '@/assets/suggestions/desktop/background-header.png'
import HamburgerMenu from '@/assets/shared/mobile/icon-hamburger.svg'
import IconClose from '@/assets/shared/mobile/icon-close.svg'
import { getImageProps } from 'next/image'
import Link from 'next/link'
import routes from '@/lib/routes'

type Props = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function HeaderLogoPanel({ isMenuOpen, toggleMenu }: Props) {
  const common = { alt: 'Header background' }

  const {
    props: { srcSet: mobile },
  } = getImageProps({ ...common, src: mobileBg })

  const {
    props: { srcSet: tablet },
  } = getImageProps({ ...common, src: tabletBG })

  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: desktopBg })
  return (
    <section className="relative h-[72px] overflow-hidden md:h-full md:rounded-dlg lg:h-[137px]">
      <picture>
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source srcSet={mobile} />
        <img className="absolute h-full w-full object-cover" alt="background" />
      </picture>
      <div className="relative flex h-full w-full items-center justify-between px-8 text-white md:items-end md:p-6">
        <div>
          <Link href={routes.home}>
            <h1 className="text-[15px] font-bold md:text-[20px]">
              Frontend Mentor
            </h1>
          </Link>
          <p className="text-[13px] font-medium opacity-75 md:text-[15px]">
            Feedback Board
          </p>
        </div>
        <button
          type="button"
          className=" -mr-1 p-1 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IconClose /> : <HamburgerMenu />}
        </button>
      </div>
    </section>
  )
}
