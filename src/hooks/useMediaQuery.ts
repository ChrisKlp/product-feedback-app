import { useState, useEffect } from 'react'

const IS_SERVER = typeof window === 'undefined'

export default function useMediaQuery(query: string, defaultValue = false) {
  const [matches, setMatches] = useState(false)

  const getMatches = (query: string): boolean => {
    if (IS_SERVER) return defaultValue
    return window.matchMedia(query).matches
  }

  useEffect(() => {
    const matchQueryList = window.matchMedia(query)
    function handleChange(e: MediaQueryListEvent) {
      setMatches(getMatches(query))
    }
    matchQueryList.addEventListener('change', handleChange)
    return () => {
      matchQueryList.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
