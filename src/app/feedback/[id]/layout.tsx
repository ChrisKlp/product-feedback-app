import SecondaryHeader from '@/components/SecondaryHeader/SecondaryHeader'

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="c-container-2">
      <SecondaryHeader showButton={true} className="mb-6" />
      <main>{children}</main>
    </div>
  )
}
