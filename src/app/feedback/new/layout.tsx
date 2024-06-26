import FeedbackFormLayout from '@/components/FeedbackFormLayout/FeedbackFormLayout'

export default function NewFeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FeedbackFormLayout>{children}</FeedbackFormLayout>
}
