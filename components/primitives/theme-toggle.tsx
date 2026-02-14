'use client'

import { useCallback, useEffect, useState } from 'react'
import s from './theme-toggle.module.css'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const current = document.documentElement.getAttribute('data-theme')
		setIsDark(current === 'dark')
	}, [])

	const toggle = useCallback(() => {
		setIsDark((prev) => {
			const next = !prev
			document.documentElement.setAttribute(
				'data-theme',
				next ? 'dark' : 'light',
			)
			return next
		})
	}, [])

	return (
		<button
			className={s.toggle}
			onClick={toggle}
			type="button"
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			{...(isDark ? { 'data-dark': '' } : {})}
		>
			<span className={s.label}>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
			<span className={s.track}>
				<span className={s.thumb} />
			</span>
		</button>
	)
}
