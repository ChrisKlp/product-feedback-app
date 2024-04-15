import mobileBg from '@/assets/suggestions/mobile/background-header.png'
import tabletBG from '@/assets/suggestions/tablet/background-header.png'
import desktopBg from '@/assets/suggestions/desktop/background-header.png'
import { getImageProps } from 'next/image'

export default function HeaderBackground() {
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
    <picture>
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img className="absolute h-full w-full object-cover" />
    </picture>
  )
}
