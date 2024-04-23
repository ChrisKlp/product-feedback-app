'use client'

import { useActiveCategoryStore } from '@/hooks/useActiveCategoryStore'
import { useActiveSortOptionStore } from '@/hooks/useActiveSortOptionStore'
import type { Feedback } from '@/types'
import { SortOption } from '@/types/index'
import { useCallback, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import NoFeedback from '@/components/NoFeedback/NoFeedback'
import SortingBar from './sorting-bar'
import FeedbackCard from '@/components/FeedbackCard/FeedbackCard'

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

  const [activeFilter, resetFilter] = useActiveSortOptionStore(
    useShallow((state) => [state.activeSortOption, state.resetSortOption]),
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
        case SortOption.LEAST_UPVOTES:
          return newData.sort((a, b) => a.upvotes - b.upvotes)
        case SortOption.MOST_COMMENTS:
          return newData.sort((a, b) => {
            const aComments = a.comments?.length ?? 0
            const bComments = b.comments?.length ?? 0
            return bComments - aComments
          })
        case SortOption.LEAST_COMMENTS:
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
