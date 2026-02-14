'use client'

import { useEffect, useRef } from 'react'

type ScrollCallback = () => void

const subscribers = new Set<ScrollCallback>()
let isListenerAttached = false
let sharedScrollY = 0

function handleScroll() {
  sharedScrollY = window.scrollY
  for (const cb of subscribers) {
    cb()
  }
}

function attachListener() {
  if (isListenerAttached) return
  window.addEventListener('scroll', handleScroll, { passive: true })
  isListenerAttached = true
}

function detachListener() {
  if (subscribers.size > 0) return
  window.removeEventListener('scroll', handleScroll)
  isListenerAttached = false
}

/**
 * Single shared passive scroll listener.
 * Stores scrollY in a ref. Provides subscribe/unsubscribe pattern so all hooks share one listener.
 */
export function useScrollPosition() {
  const scrollY = useRef(0)

  useEffect(() => {
    scrollY.current = window.scrollY
    sharedScrollY = window.scrollY
  }, [])

  const subscribe = useRef((cb: ScrollCallback): (() => void) => {
    attachListener()
    const wrappedCb: ScrollCallback = () => {
      scrollY.current = sharedScrollY
      cb()
    }
    subscribers.add(wrappedCb)
    return () => {
      subscribers.delete(wrappedCb)
      detachListener()
    }
  }).current

  return { scrollY, subscribe }
}
