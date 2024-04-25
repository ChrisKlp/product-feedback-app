import { cn } from '@/lib/utils'
import GoBackLink from '../GoBackLink/GoBackLink'

type Props = {
  withEditButton?: boolean
  className?: string
}

export default function SecondaryHeader({
  withEditButton = false,
  className,
}: Props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <GoBackLink theme="light" />
      {withEditButton && (
        <button className="btn btn-blue">Edit Feedback</button>
      )}
    </header>
  )
}
