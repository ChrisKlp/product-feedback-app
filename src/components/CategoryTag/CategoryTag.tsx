import { cn } from '@/lib/utils'

type Props = {
  name: string
  className?: string
  isSelected?: boolean
}

export function CategoryTag({ name, className, isSelected = false }: Props) {
  return (
    <span
      className={cn(
        'inline-flex h-[30px] items-center rounded-dlg bg-@blue-200 px-4 transition-colors group-hover:bg-@blue-300',
        isSelected && 'bg-@blue-500 group-hover:bg-@blue-500',
        className,
      )}
    >
      <span
        className={cn(
          'text-[13px] font-semibold capitalize text-@blue-500 transition-colors',
          isSelected && 'text-white',
          (name === 'ui' || name === 'ux') && 'uppercase',
        )}
      >
        {name}
      </span>
    </span>
  )
}
