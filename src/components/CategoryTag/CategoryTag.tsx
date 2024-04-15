import { cn } from '@/utils/utils'

type Props = {
  name: string
  isSelected?: boolean
  className?: string
  onSelected?: (name: string) => void
}

export function CategoryTag({
  name,
  className,
  isSelected = false,
  onSelected,
}: Props) {
  return (
    <span
      className={cn(
        'bg-blue200 group-hover:bg-blue300 rounded-dlg inline-flex h-[30px] items-center px-4 transition-colors',
        isSelected && 'bg-blue500',
        className,
      )}
    >
      <span
        className={cn(
          'text-blue500 text-[13px] font-semibold capitalize transition-colors',
          isSelected && 'text-white',
        )}
      >
        {name}
      </span>
    </span>
  )
}

export function CategoryButtonTag({
  name,
  className,
  isSelected = false,
  onSelected,
}: Props) {
  return (
    <button
      className={cn('group', isSelected && 'pointer-events-none', className)}
    >
      <CategoryTag name={name} isSelected={isSelected} />
    </button>
  )
}
