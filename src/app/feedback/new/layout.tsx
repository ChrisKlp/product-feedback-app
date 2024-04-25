import SecondaryHeader from '@/components/SecondaryHeader/SecondaryHeader'

export default function NewFeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="c-container-2">
      <SecondaryHeader withEditButton={false} className="mb-14" />
      <main>{children}</main>
    </div>
  )
}
