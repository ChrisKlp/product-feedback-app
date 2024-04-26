import SecondaryHeader from '@/components/SecondaryHeader/SecondaryHeader'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
  variant?: 'create' | 'edit'
}

const images = {
  create: '/assets/icon-new-feedback.svg',
  edit: '/assets/icon-edit-feedback.svg',
}

export default function FeedbackFormLayout({
  children,
  variant = 'create',
}: Props) {
  return (
    <div className="c-container max-w-[540px] p-6 pb-20 md:px-10 md:pb-28 md:pt-14 lg:pt-[80px]">
      <SecondaryHeader withEditButton={false} className="mb-6" />
      <main>
        <section className="relative mt-10 rounded-[10px] bg-white p-6 pt-11 md:mt-14 md:p-10 md:pt-14">
          <Image
            src={images[variant]}
            width={56}
            height={56}
            className="absolute -top-5 w-10 md:-top-7 md:w-14"
            alt="add icon"
          />
          {children}
        </section>
      </main>
    </div>
  )
}
