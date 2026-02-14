'use client'

import { useEffect, useRef } from 'react'
import { useMediaQuery } from './use-media-query'

interface UseLogoScrollOptions {
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

/**
 * Port of logo-scroll.js custom element.
 *
 * Applies translate3d(0, -Y%, 0) to logo elements where Y is based on
 * scrollY modulo windowHeight. As the user scrolls through each "window height"
 * of content, the logo translates from 0% to -100%.
 *
 * Usage:
 *   const { containerRef, logoRefs } = useLogoScroll()
 *   // containerRef: the outer wrapper
 *   // Use setLogoRef(index) to set refs on each logo element
 */
export function useLogoScroll<T extends HTMLElement = HTMLElement>(
  options: UseLogoScrollOptions = {},
) {
  const { respectReducedMotion = true } = options

  const containerRef = useRef<T>(null)
  const logoElsRef = useRef<HTMLElement[]>([])
  const isTicking = useRef(false)
  const lastKnownY = useRef(0)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  const setLogoRef = useRef((index: number) => {
    return (el: HTMLElement | null) => {
      if (el) {
        logoElsRef.current[index] = el
      }
    }
  }).current

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (respectReducedMotion && prefersReducedMotion) return

    function updateEl() {
      isTicking.current = false
      scrollLogo()
    }

    function scrollLogo() {
      const scrollYAsAPercentage = lastKnownY.current / window.innerHeight

      // Count full windows scrolled (matches original for loop)
      let totalWindowsScrolled = 0
      for (let i = 0; i < scrollYAsAPercentage; i++) {
        totalWindowsScrolled = i
      }

      const transformAmountY =
        100 * (scrollYAsAPercentage - totalWindowsScrolled)

      logoElsRef.current.forEach((logoEl) => {
        if (logoEl) {
          logoEl.style.transform = `translate3d(0px, -${transformAmountY}%, 0px)`
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

    // Initial position
    lastKnownY.current = window.scrollY
    updateEl()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [prefersReducedMotion, respectReducedMotion])

  return { containerRef, setLogoRef }
}
