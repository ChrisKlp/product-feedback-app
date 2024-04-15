'use client'

import { Feedback } from '@/types'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import { useActiveCategoryStore } from '@/hooks/useActiveCategoryStore'
import { useEffect } from 'react'
import SortingBar from '../SortingBar/SortingBar'

type Props = {
  data: Feedback[]
}

export default function FeedbackList({ data }: Props) {
  const activeCategory = useActiveCategoryStore((state) => state.activeCategory)
  const defaultCategory = useActiveCategoryStore(
    (state) => state.defaultCategory,
  )
  const getFilteredData = () => {
    if (activeCategory !== defaultCategory) {
      return data.filter(
        (el) => el.category.toLowerCase() === activeCategory.toLowerCase(),
      )
    }
    return data
  }

  useEffect(() => {
    console.log(activeCategory)
    return () => {}
  }, [activeCategory])

  return (
    <>
      <SortingBar counter={getFilteredData().length || 0} />
      <div className="grid gap-4 px-6 pb-[55px] pt-8 md:px-0 md:pb-[120px] md:pt-6">
        {getFilteredData().map((el) => (
          <FeedbackCard key={el.id} data={el} />
        ))}
      </div>
    </>
  )
}
