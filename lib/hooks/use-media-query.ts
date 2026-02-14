'use client'

import { useEffect, useState } from 'react'

/**
 * Reactive media query hook.
 * @param query - CSS media query string, e.g. '(min-width: 768px)'
 * @returns boolean indicating whether the query currently matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mql.addEventListener('change', handler)
    return () => {
      mql.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}
