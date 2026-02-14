'use client'

import { useEffect, useRef } from 'react'
import { getOffsetTop } from '@/lib/utils/get-offset-top'
import { useMediaQuery } from './use-media-query'

interface UseParallaxOptions {
  /** Parallax amount in pixels on desktop. Default: 60 */
  desktopAmount?: number
  /** Parallax amount in pixels on mobile. Default: 40 */
  mobileAmount?: number
  /** Delay before activating (ms). Default: 500 */
  activationDelay?: number
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

/**
 * Port of parallax-image.js custom element.
 *
 * Uses rAF + passive scroll listener to apply translate3d(0, Y, 0)
 * where Y is calculated from element position relative to viewport.
 *
 * Amount: ~60px desktop, ~40px mobile (configurable).
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  options: UseParallaxOptions = {},
) {
  const {
    desktopAmount = 60,
    mobileAmount = 40,
    activationDelay = 500,
    respectReducedMotion = true,
  } = options

  const ref = useRef<T>(null)
  const isTicking = useRef(false)
  const lastKnownY = useRef(0)
  const isActive = useRef(false)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (respectReducedMotion && prefersReducedMotion) return

    const amountToMoveY = isMobile ? mobileAmount : desktopAmount

    function updateEl() {
      isTicking.current = false
      moveParallaxItem()
    }

    function moveParallaxItem() {
      if (!el || !el.offsetHeight) return

      const elementHeight = el.offsetHeight
      const heightDifference = amountToMoveY
      const elementStartPoint = getOffsetTop(el) - window.innerHeight
      const elementEndPoint = getOffsetTop(el) + elementHeight

      if (lastKnownY.current <= elementStartPoint) {
        el.style.transform = `translate3d(0px, ${amountToMoveY / -2}px, 0px)`
        return
      }

      if (lastKnownY.current > elementEndPoint) {
        el.style.transform = `translate3d(0px, ${amountToMoveY / 2}px, 0px)`
        return
      }

      const totalScrollAmount = elementEndPoint - elementStartPoint
      const scrollYAsAPercentageOfJourney =
        (lastKnownY.current - elementStartPoint) / totalScrollAmount
      const transformAmountY =
        heightDifference * scrollYAsAPercentageOfJourney - heightDifference / 2

      el.style.transform = `translate3d(0px, ${transformAmountY}px, 0px)`
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

    // Delayed activation (matches original 500ms setTimeout)
    const activationTimer = setTimeout(() => {
      isActive.current = true
      el.setAttribute('active', '')
    }, activationDelay)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(activationTimer)
      isActive.current = false
    }
  }, [
    isMobile,
    prefersReducedMotion,
    desktopAmount,
    mobileAmount,
    activationDelay,
    respectReducedMotion,
  ])

  return ref
}
