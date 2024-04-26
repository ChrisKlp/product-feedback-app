import { cn } from '@/lib/utils'
import GoBackLink from '../GoBackLink/GoBackLink'
import EditFeedbackButton from '../actionButtons/EditFeedbackButton/EditFeedbackButton'

type Props = {
  withEditButton?: boolean
  className?: string
}

export default function SecondaryHeader({
  withEditButton = false,
  className,
}: Props) {
  return (
    <header className={cn('flex h-11 items-center justify-between', className)}>
      <GoBackLink theme="light" />
      {withEditButton && <EditFeedbackButton />}
    </header>
  )
}
