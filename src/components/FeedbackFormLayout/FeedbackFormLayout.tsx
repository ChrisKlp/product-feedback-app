import Image from 'next/image'
import GoBackLink from '../GoBackLink/GoBackLink'

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
    <div className="c-container max-w-[588px] p-6 pb-20 md:pb-28 md:pt-14 lg:pt-[80px]">
      <header className="mb-6' flex h-11 items-center justify-between gap-2">
        <GoBackLink theme="light" />
      </header>
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
