'use client'

import type { TickerTextSection } from '@/lib/data/types'
import { ParallaxImage } from '@/components/primitives/parallax-image'
import { Link } from '@/components/link'
import { useTickerText } from '@/lib/hooks/use-ticker-text'
import s from './ticker-text.module.css'

interface TickerTextProps {
	data: TickerTextSection
}

export function TickerText({ data }: TickerTextProps) {
	const { text, backgroundImage, button } = data
	const { wrapperRef, containerRef, messageRef } = useTickerText<
		HTMLElement,
		HTMLDivElement,
		HTMLSpanElement
	>()

	return (
		<section ref={wrapperRef} className={s.section}>
			{/* Background image */}
			<div className={s.media}>
				<ParallaxImage image={backgroundImage} />
			</div>

			{/* Ticker container */}
			<div className={s.tickerContainer}>
				<div ref={containerRef} className={s.ticker}>
					{/* Three copies for seamless scrolling */}
					<span ref={messageRef} className={s.tickerMessage}>
						{text}
					</span>
					<span className={s.tickerMessage} aria-hidden="true">
						{text}
					</span>
					<span className={s.tickerMessage} aria-hidden="true">
						{text}
					</span>
				</div>
			</div>

			{/* Optional CTA button */}
			{button && (
				<div className={s.buttonContainer}>
					<Link
						href={button.href}
						className={`${s.button} ${button.variant === 'primary' ? s.buttonPrimary : s.buttonSecondary}`}
					>
						<span>{button.label}</span>
					</Link>
				</div>
			)}
		</section>
	)
}
