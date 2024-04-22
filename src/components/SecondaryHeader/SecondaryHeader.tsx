import { cn } from '@/lib/utils'
import GoBackLink from '../GoBackLink/GoBackLink'

type Props = {
  showButton?: boolean
  className?: string
}

export default function SecondaryHeader({
  showButton = false,
  className,
}: Props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <GoBackLink theme="light" />
      {showButton && <button className="btn btn-blue">Edit Feedback</button>}
    </header>
  )
}
