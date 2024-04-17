import { cn } from '@/utils/utils'

type Props = {
  name: string
  isSelected?: boolean
  className?: string
  onSelected?: () => void
}

export function CategoryTag({ name, className, isSelected = false }: Props) {
  return (
    <span
      className={cn(
        'inline-flex h-[30px] items-center rounded-dlg bg-blue200 px-4 transition-colors group-hover:bg-blue300',
        isSelected && 'bg-blue500 group-hover:bg-blue500',
        className,
      )}
    >
      <span
        className={cn(
          'text-[13px] font-semibold capitalize text-blue500 transition-colors',
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
      type="button"
      className={cn('group', isSelected && 'pointer-events-none', className)}
      onClick={onSelected}
    >
      <CategoryTag name={name} isSelected={isSelected} />
    </button>
  )
}
