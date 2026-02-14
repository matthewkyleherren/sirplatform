'use client'

import type { ReactNode } from 'react'
import {
	useAnimateIn,
	splitAnimateWords,
} from '@/lib/hooks/use-animate-in'
import s from './animate-in.module.css'

interface AnimateInProps {
	children: ReactNode
	className?: string
}

interface AnimateInWordsProps {
	text: string
	className?: string
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

/**
 * Wraps children with an entrance animation triggered by IntersectionObserver.
 * Sets `data-animate` on the wrapper when visible, allowing CSS transitions on children.
 */
export function AnimateIn({ children, className }: AnimateInProps) {
	const { ref, isAnimated } = useAnimateIn<HTMLDivElement>()

	return (
		<div
			ref={ref}
			className={`${s.wrapper} ${className ?? ''}`}
			{...(isAnimated ? { 'data-animate': '' } : {})}
		>
			{children}
		</div>
	)
}

/**
 * Splits a text string into word spans for staggered entrance animation.
 * Each word gets the `.word` class from animate-in.module.css.
 */
export function AnimateInWords({
	text,
	className,
	tag: Tag = 'h2',
}: AnimateInWordsProps) {
	const { ref, isAnimated } = useAnimateIn<HTMLElement>()
	const words = splitAnimateWords(text)

	return (
		<Tag
			ref={ref as React.RefObject<never>}
			className={`${s.wrapper} ${className ?? ''}`}
			{...(isAnimated ? { 'data-animate': '' } : {})}
		>
			{words.map((entry, i) =>
				entry.isBreak ? (
					<br key={i} />
				) : (
					<span key={i} className={s.word}>
						{entry.word}
						{i < words.length - 1 && !words[i + 1]?.isBreak ? '\u00A0' : ''}
					</span>
				),
			)}
		</Tag>
	)
}

/**
 * Wrapper for content that fades in after the words animate.
 * Use inside an <AnimateIn> wrapper.
 */
export function AnimateInContent({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div className={`${s.content} ${className ?? ''}`}>{children}</div>
	)
}
