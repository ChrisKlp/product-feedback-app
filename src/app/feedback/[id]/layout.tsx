import GoBackLink from '@/components/GoBackLink/GoBackLink'
import EditFeedbackButton from '@/components/actionButtons/EditFeedbackButton/EditFeedbackButton'
import SignInButton from '@/components/actionButtons/SignInButton/SignInButton'
import { getFeedbackWithCounter } from '@/data-access/feedbacks'
import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

type Props = { params: { id: string }; children: React.ReactNode }

export default async function SingleFeedbackLayout({
  params,
  children,
}: Props) {
  const feedbackData = await getFeedbackWithCounter(params.id)
  const { userId, sessionClaims } = auth()

  if (!feedbackData) {
    notFound()
  }

  const isAuthorized =
    userId === feedbackData.userId || sessionClaims?.metadata.role === 'admin'

  return (
    <div className="c-container p-6 pb-20 md:px-10 md:pb-28 md:pt-14 lg:pt-[80px]">
      <header
        className={cn('mb-6 flex h-11 items-center justify-between gap-2')}
      >
        <GoBackLink theme="light" />
        {userId ? (
          <div className="flex items-center gap-4">
            {isAuthorized && <EditFeedbackButton />}
            <div className="relative grid h-[34px] w-[34px] place-items-center">
              <div className="absolute h-full w-full rounded-full bg-@blue-300" />
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-[34px] h-auto',
                  },
                }}
                afterSignOutUrl={`${routes.feedback}/${params.id}`}
              />
            </div>
          </div>
        ) : (
          <SignInButton />
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
