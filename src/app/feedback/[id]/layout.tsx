import SecondaryHeader from '@/components/SecondaryHeader/SecondaryHeader'

export default function SingleFeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="c-container p-6 pb-20 md:px-10 md:pb-28 md:pt-14 lg:pt-[80px]">
      <SecondaryHeader withEditButton={true} className="mb-6" />
      <main>{children}</main>
    </div>
  )
}
