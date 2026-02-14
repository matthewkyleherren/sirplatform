"use client"

import { useEffect, useState } from 'react'
import s from './theme-switch.module.css'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'p448-theme'

function applyTheme(theme: Theme) {
	if (typeof document === 'undefined') return

	document.documentElement.dataset.theme = theme
	document.body.dataset.theme = theme
	document.body.classList.toggle('theme-dark', theme === 'dark')
	document.body.classList.toggle('theme-light', theme === 'light')
}

export function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
		const initialTheme: Theme = stored === 'dark' ? 'dark' : 'light'
		setTheme(initialTheme)
		applyTheme(initialTheme)
	}, [])

	const handleToggle = () => {
		setTheme((prev) => {
			const next: Theme = prev === 'light' ? 'dark' : 'light'
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(STORAGE_KEY, next)
			}
			applyTheme(next)
			return next
		})
	}

	return (
		<button
			type="button"
			className={s.switch}
			data-theme={theme}
			onClick={handleToggle}
			aria-label="Toggle light and dark mode"
		>
			<span className={s.label}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
			<span className={s.toggle}>
				<span className={s.knob} />
			</span>
		</button>
	)
}
