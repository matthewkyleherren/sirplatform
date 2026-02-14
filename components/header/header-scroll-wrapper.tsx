'use client'

import { useEffect, useState } from 'react'

interface HeaderScrollWrapperProps {
	className?: string
	children: React.ReactNode
}

export function HeaderScrollWrapper({ className, children }: HeaderScrollWrapperProps) {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 10)
		}

		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className={className} data-scrolled={scrolled}>
			{children}
		</div>
	)
}
