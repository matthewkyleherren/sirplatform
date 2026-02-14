'use client'

import { useEffect, useRef, useState } from 'react'

interface UseLazyVideoOptions {
  /** IntersectionObserver threshold. Default: 0 */
  threshold?: number
  /** Whether to auto-play on mobile via touchstart. Default: true */
  autoplayOnMobile?: boolean
}

/**
 * Port of lazy-video.js custom element.
 *
 * Uses IntersectionObserver to lazy-load video sources.
 * When visible: copies data-src to src on <source> elements, calls video.load().
 * Optionally handles data-poster attribute and mobile autoplay via touchstart.
 *
 * Usage:
 *   const { videoRef, isLoaded } = useLazyVideo()
 *   // Attach videoRef to the <video> element
 *   // Use data-src on <source> children, data-poster on video for lazy loading
 */
export function useLazyVideo(options: UseLazyVideoOptions = {}) {
  const { threshold = 0, autoplayOnMobile = true } = options

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        // Set poster from data-poster if present
        const dataPoster = video.dataset.poster
        if (dataPoster) {
          video.setAttribute('poster', dataPoster)
        }

        // Copy data-src to src on all <source> children
        const children = video.children
        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          if (
            child instanceof HTMLSourceElement &&
            child.dataset.src
          ) {
            child.src = child.dataset.src
          }
        }

        video.load()
        observer.unobserve(video)
        setIsLoaded(true)

        // Mobile autoplay: listen for touchstart to play paused videos
        const isMobile = window.matchMedia('(max-width: 767px)').matches
        if (
          autoplayOnMobile &&
          !isMobile &&
          video.getAttribute('autoplay') !== null
        ) {
          // Desktop with autoplay: no extra handling needed
        } else if (autoplayOnMobile && isMobile && video.paused) {
          const playOnTouch = () => {
            if (video.paused) {
              video.play().catch(() => {
                // Autoplay may be blocked by browser policy
              })
            }
          }
          document.addEventListener('touchstart', playOnTouch, {
            once: true,
          })
        }
      },
      { threshold },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [threshold, autoplayOnMobile])

  return { videoRef, isLoaded }
}
