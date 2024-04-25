import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CategoryTag } from './CategoryTag'

type ButtonProps = {
  name: string
  className?: string
  defaultCategory: string
  onClick: () => void
}
export function CategoryButtonTag({
  name,
  className,
  defaultCategory,
  onClick,
}: ButtonProps) {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category') ?? defaultCategory
  const isSelected = name === activeCategory

  const getHref = (name: string) => {
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('category', name)
    return name !== 'all'
      ? `${routes.home}?${newParams.toString()}`
      : routes.home
  }

  return (
    <Link
      type="button"
      className={cn('group', isSelected && 'pointer-events-none', className)}
      href={getHref(name)}
      onClick={onClick}
    >
      <CategoryTag name={name} isSelected={isSelected} />
    </Link>
  )
}
