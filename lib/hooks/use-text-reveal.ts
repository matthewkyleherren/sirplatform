'use client'

import { useEffect, useRef } from 'react'
import { getOffsetTop } from '@/lib/utils/get-offset-top'
import { useMediaQuery } from './use-media-query'

interface UseTextRevealOptions {
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

/**
 * Port of text-reveal.js custom element.
 *
 * Sets --Reveal_Amount CSS variable (0-100%) on each word element
 * based on scroll position. Words are distributed evenly across
 * the scroll journey of the element.
 *
 * The element journey spans from getOffsetTop(el) to getOffsetTop(el) + windowHeight/2.
 *
 * Usage:
 *   const { containerRef, wordRefs } = useTextReveal()
 *   // Attach containerRef to the section, wordRefs to individual word spans
 *   // Each word span receives --Reveal_Amount as a CSS variable
 */
export function useTextReveal<T extends HTMLElement = HTMLElement>(
  options: UseTextRevealOptions = {},
) {
  const { respectReducedMotion = true } = options

  const containerRef = useRef<T>(null)
  const wordElsRef = useRef<HTMLElement[]>([])
  const isTicking = useRef(false)
  const lastKnownY = useRef(0)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const setWordRef = useRef((index: number) => {
    return (el: HTMLElement | null) => {
      if (el) {
        wordElsRef.current[index] = el
      }
    }
  }).current

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (respectReducedMotion && prefersReducedMotion) {
      // Reveal all words immediately
      wordElsRef.current.forEach((wordEl) => {
        wordEl.style.setProperty('--Reveal_Amount', '100%')
      })
      return
    }

    function updateEl() {
      isTicking.current = false
      revealText()
    }

    function revealText() {
      if (!container) return

      const elementStartPoint = getOffsetTop(container)
      const elementEndPoint = elementStartPoint + window.innerHeight / 2
      const wordEls = wordElsRef.current

      if (lastKnownY.current <= elementStartPoint) {
        wordEls.forEach((wordEl) => {
          wordEl.style.setProperty('--Reveal_Amount', '0%')
        })
        return
      }

      if (lastKnownY.current > elementEndPoint) {
        wordEls.forEach((wordEl) => {
          wordEl.style.setProperty('--Reveal_Amount', '100%')
        })
        return
      }

      const totalScrollAmount = elementEndPoint - elementStartPoint
      const scrollYAsAPercentageOfJourney =
        (lastKnownY.current - elementStartPoint) / totalScrollAmount

      wordEls.forEach((wordEl, index) => {
        const minimumPercent = index / wordEls.length
        const maximumPercent = (index + 1) / wordEls.length

        if (
          scrollYAsAPercentageOfJourney >= minimumPercent &&
          scrollYAsAPercentageOfJourney < maximumPercent
        ) {
          const wordScrolledAmount =
            scrollYAsAPercentageOfJourney - minimumPercent
          const wordMaxAmount = maximumPercent - minimumPercent
          const wordProgress = wordScrolledAmount / wordMaxAmount
          const wordProgressAmount =
            Math.round(wordProgress * 100 * 10) / 10

          wordEl.style.setProperty(
            '--Reveal_Amount',
            `${wordProgressAmount}%`,
          )
        } else if (scrollYAsAPercentageOfJourney > maximumPercent) {
          wordEl.style.setProperty('--Reveal_Amount', '100%')
        } else {
          wordEl.style.setProperty('--Reveal_Amount', '0%')
        }
      })
    }

    function requestTick() {
      if (!isTicking.current) {
        requestAnimationFrame(updateEl)
      }
      isTicking.current = true
    }

    function onScroll() {
      lastKnownY.current = window.scrollY
      requestTick()
    }

    // Initial update after a short delay (matches original 500ms)
    lastKnownY.current = window.scrollY
    const initTimer = setTimeout(() => {
      updateEl()
    }, 500)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(initTimer)
    }
  }, [prefersReducedMotion, respectReducedMotion])

  return { containerRef, setWordRef }
}
