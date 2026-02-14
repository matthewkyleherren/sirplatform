'use client'

import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from './use-media-query'

interface UseAnimateInOptions {
  /** Root margin for IntersectionObserver. Auto-selects based on viewport if not provided. */
  rootMargin?: string
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

interface AnimateInResult<T extends HTMLElement> {
  /** Ref to attach to the container element */
  ref: React.RefObject<T | null>
  /** Whether the element has been animated in */
  isAnimated: boolean
}

/**
 * Port of animate-in.js custom element.
 *
 * Uses IntersectionObserver with rootMargin. Fires once, sets animated state.
 * On mobile (< 768px) uses -60px rootMargin, desktop uses -50px.
 */
export function useAnimateIn<T extends HTMLElement = HTMLElement>(
  options: UseAnimateInOptions = {},
): AnimateInResult<T> {
  const { respectReducedMotion = true } = options

  const ref = useRef<T>(null)
  const [isAnimated, setIsAnimated] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (respectReducedMotion && prefersReducedMotion) {
      setIsAnimated(true)
      return
    }

    const rootMargin =
      options.rootMargin ?? (isMobile ? '-60px' : '-50px')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsAnimated(true)
          observer.unobserve(el)
        }
      },
      { rootMargin, threshold: 0 },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [isMobile, prefersReducedMotion, options.rootMargin, respectReducedMotion])

  return { ref, isAnimated }
}

/**
 * Utility to split text into word spans for staggered animation.
 * Matches the original animate-in.js splitWords behavior:
 * wraps each word in <span class="ani-Title"><span class="ani-Title_Word">word</span></span>
 *
 * Returns an array of word entries. Line breaks in the source text are preserved.
 */
export interface AnimateWord {
  word: string
  isBreak: boolean
}

export function splitAnimateWords(text: string): AnimateWord[] {
  const words = text.replace(/\n/g, ' <br> ').split(' ')
  return words
    .filter((w) => w.trim() !== '')
    .map((word) => ({
      word: word === '<br>' ? '' : word,
      isBreak: word === '<br>',
    }))
}
