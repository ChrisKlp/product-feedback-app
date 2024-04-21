'use client'

import { useActiveCategoryStore } from '@/hooks/useActiveCategoryStore'
import { useActiveFilterStore } from '@/hooks/useActiveFilterStore'
import type { Feedback } from '@/types'
import { Filter } from '@/types/index'
import { useCallback, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'
import NoFeedback from '@/components/NoFeedback/NoFeedback'
import SortingBar from './sorting-bar'

type Props = {
  data: Feedback[]
}

export default function FeedbackList({ data }: Props) {
  const [activeCategory, defaultCategory, resetCategory] =
    useActiveCategoryStore(
      useShallow((state) => [
        state.activeCategory,
        state.defaultCategory,
        state.resetCategory,
      ]),
    )

  const [activeFilter, resetFilter] = useActiveFilterStore(
    useShallow((state) => [state.activeFilter, state.resetFilter]),
  )

  const getFilteredData = useCallback(() => {
    if (activeCategory !== defaultCategory) {
      return data.filter(
        (el) => el.category.toLowerCase() === activeCategory.toLowerCase(),
      )
    }
    return data
  }, [activeCategory, data, defaultCategory])

  const getSortedData = useCallback(
    (data: Feedback[]) => {
      const newData = [...data]
      switch (activeFilter) {
        case Filter['Least Upvotes']:
          return newData.sort((a, b) => a.upvotes - b.upvotes)
        case Filter['Most Comments']:
          return newData.sort((a, b) => {
            const aComments = a.comments?.length ?? 0
            const bComments = b.comments?.length ?? 0
            return bComments - aComments
          })
        case Filter['Least Comments']:
          return newData.sort((a, b) => {
            const aComments = a.comments?.length ?? 0
            const bComments = b.comments?.length ?? 0
            return aComments - bComments
          })
        default:
          return newData.sort((a, b) => b.upvotes - a.upvotes)
      }
    },
    [activeFilter],
  )

  useEffect(() => {
    return () => {
      resetCategory()
      resetFilter()
    }
  }, [resetCategory, resetFilter])

  const updatedData = getSortedData(getFilteredData())

  return (
    <>
      <SortingBar counter={getFilteredData().length || 0} />
      <div className="grid gap-4 px-6 pb-[55px] pt-8 md:px-0 md:pb-[120px] md:pt-6">
        {updatedData.length ? (
          <>
            {updatedData.map((feedback) => (
              <FeedbackCard key={feedback.id} data={feedback} />
            ))}
          </>
        ) : (
          <NoFeedback />
        )}
      </div>
    </>
  )
}