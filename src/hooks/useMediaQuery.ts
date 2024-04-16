import { useState, useEffect } from 'react'

const IS_SERVER = typeof window === 'undefined'

export default function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = useState(false)

  const getMatches = (query: string): boolean => {
    if (IS_SERVER) return defaultValue
    return window.matchMedia(query).matches
  }

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    handleChange()
  }, [])

  useEffect(() => {
    const matchQueryList = window.matchMedia(query)

    matchQueryList.addEventListener('change', handleChange)
    return () => {
      matchQueryList.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
