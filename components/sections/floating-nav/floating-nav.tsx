'use client'

import { useEffect, useRef, useState } from 'react'
import { Link } from '@/components/link'
import s from './floating-nav.module.css'

interface FloatingNavProps {
	label: string
	href: string
	/** CSS selector for the footer element. Default: 'footer' */
	footerSelector?: string
}

export function FloatingNav({
	label,
	href,
	footerSelector = 'footer',
}: FloatingNavProps) {
	const [isVisible, setIsVisible] = useState(true)
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		const footer = document.querySelector(footerSelector)
		if (!footer) return

		observerRef.current = new IntersectionObserver(
			([entry]) => {
				setIsVisible(!entry?.isIntersecting)
			},
			{ threshold: 0 },
		)

		observerRef.current.observe(footer)

		return () => {
			observerRef.current?.disconnect()
		}
	}, [footerSelector])

	return (
		<div className={`${s.container} ${isVisible ? s.visible : s.hidden}`}>
			<Link href={href} className={s.button}>
				{label}
			</Link>
		</div>
	)
}
