'use client'

import { useEffect, useRef } from 'react'
import { getOffsetTop } from '@/lib/utils/get-offset-top'
import { useMediaQuery } from './use-media-query'

interface UseTickerTextOptions {
  /** Maximum X translation percentage. Default: 100 */
  amountToMoveX?: number
  /** Whether to respect prefers-reduced-motion. Default: true */
  respectReducedMotion?: boolean
}

/**
 * Port of ticker-text.js custom element.
 *
 * Scroll-driven translate3d(-X%, 0, 0) on the container element.
 * X ranges from 0% to ~100% based on element's journey through viewport.
 *
 * Also calculates and sets --Ticker_Speed CSS variable on the wrapper
 * based on the message element's width (width/60 desktop, width/100 mobile).
 *
 * Usage:
 *   const { wrapperRef, containerRef, messageRef } = useTickerText()
 *   // wrapperRef: outer element that receives --Ticker_Speed
 *   // containerRef: element that gets translate3d applied
 *   // messageRef: element whose width determines ticker speed
 */
export function useTickerText<
  TWrapper extends HTMLElement = HTMLElement,
  TContainer extends HTMLElement = HTMLElement,
  TMessage extends HTMLElement = HTMLElement,
>(options: UseTickerTextOptions = {}) {
  const { amountToMoveX = 100, respectReducedMotion = true } = options

  const wrapperRef = useRef<TWrapper>(null)
  const containerRef = useRef<TContainer>(null)
  const messageRef = useRef<TMessage>(null)
  const isTicking = useRef(false)
  const lastKnownY = useRef(0)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current
    const message = messageRef.current
    if (!wrapper || !container || !message) return

    if (respectReducedMotion && prefersReducedMotion) return

    // Set ticker speed CSS variable (matches original setupTickerSpeed)
    const divisor = isMobile ? 100 : 60
    const tickerWidth = message.offsetWidth / divisor
    wrapper.style.setProperty('--Ticker_Speed', String(tickerWidth))

    function updateEl() {
      isTicking.current = false
      moveContainer()
    }

    function moveContainer() {
      if (!wrapper!.offsetHeight) return

      const elementHeight = wrapper!.offsetHeight
      const elementStartPoint = getOffsetTop(wrapper!) - window.innerHeight
      const elementEndPoint = getOffsetTop(wrapper!) + elementHeight

      if (lastKnownY.current <= elementStartPoint) {
        container!.style.transform = 'translate3d(0%, 0px, 0px)'
        return
      }

      if (lastKnownY.current > elementEndPoint) {
        container!.style.transform = 'translate3d(-100%, 0px, 0px)'
        return
      }

      const totalScrollAmount = elementEndPoint - elementStartPoint
      const scrollYAsAPercentageOfJourney =
        (lastKnownY.current - elementStartPoint) / totalScrollAmount
      const transformAmountX =
        amountToMoveX * scrollYAsAPercentageOfJourney

      container!.style.transform = `translate3d(-${transformAmountX}%, 0px, 0px)`
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
  }, [isMobile, prefersReducedMotion, amountToMoveX, respectReducedMotion])

  return { wrapperRef, containerRef, messageRef }
}
