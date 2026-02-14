'use client'

import { useEffect, useRef, useState } from 'react'
import { getOffsetTop } from '@/lib/utils/get-offset-top'
import { useMediaQuery } from './use-media-query'

interface UseTextImageRevealOptions {
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

interface WordData {
  el: HTMLElement
  dataIndex: string
}

/**
 * Port of text-image-reveal.js custom element.
 *
 * Extends text-reveal logic: sets --Reveal_Amount CSS variable on each word.
 * Also tracks which "block" (data-index) is currently active and
 * toggles media visibility based on active block index.
 *
 * The element journey spans from getOffsetTop(el) to getOffsetTop(el) + windowHeight - 200.
 *
 * Usage:
 *   const { containerRef, setWordRef, activeIndex } = useTextImageReveal()
 *   // Each word element needs a data-index attribute indicating its block
 *   // Media elements show/hide based on activeIndex
 */
export function useTextImageReveal<T extends HTMLElement = HTMLElement>(
  options: UseTextImageRevealOptions = {},
) {
  const { respectReducedMotion = true } = options

  const containerRef = useRef<T>(null)
  const wordDataRef = useRef<WordData[]>([])
  const isTicking = useRef(false)
  const lastKnownY = useRef(0)
  const [activeIndex, setActiveIndex] = useState<string>('0')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const registerWord = useRef(
    (index: number, dataIndex: string) => {
      return (el: HTMLElement | null) => {
        if (el) {
          wordDataRef.current[index] = { el, dataIndex }
        }
      }
    },
  ).current

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (respectReducedMotion && prefersReducedMotion) {
      wordDataRef.current.forEach(({ el }) => {
        el.style.setProperty('--Reveal_Amount', '100%')
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
      const elementEndPoint = elementStartPoint + window.innerHeight - 200
      const words = wordDataRef.current

      if (lastKnownY.current <= elementStartPoint) {
        words.forEach(({ el }) => {
          el.style.setProperty('--Reveal_Amount', '0%')
        })
        return
      }

      if (lastKnownY.current > elementEndPoint) {
        words.forEach(({ el }) => {
          el.style.setProperty('--Reveal_Amount', '100%')
        })
        return
      }

      const totalScrollAmount = elementEndPoint - elementStartPoint
      const scrollYAsAPercentageOfJourney =
        (lastKnownY.current - elementStartPoint) / totalScrollAmount

      words.forEach(({ el, dataIndex }, index) => {
        const minimumPercent = index / words.length
        const maximumPercent = (index + 1) / words.length

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

          // Update active media index (skip index "0" per original logic)
          if (dataIndex !== '0') {
            setActiveIndex(dataIndex)
          }

          el.style.setProperty(
            '--Reveal_Amount',
            `${wordProgressAmount}%`,
          )
        } else if (scrollYAsAPercentageOfJourney > maximumPercent) {
          el.style.setProperty('--Reveal_Amount', '100%')
        } else {
          el.style.setProperty('--Reveal_Amount', '0%')
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

    // Initial update after delay (matches original 500ms)
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

  return { containerRef, registerWord, activeIndex }
}
