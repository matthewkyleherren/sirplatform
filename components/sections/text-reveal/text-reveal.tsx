'use client'

import type { TextRevealSection } from '@/lib/data/types'
import { ParallaxImage } from '@/components/primitives/parallax-image'
import { useTextReveal } from '@/lib/hooks/use-text-reveal'
import s from './text-reveal.module.css'

interface TextRevealProps {
	data: TextRevealSection
}

export function TextReveal({ data }: TextRevealProps) {
	const { caption, text, backgroundImage, overlayOpacity = 0.4 } = data
	const { containerRef, setWordRef } = useTextReveal<HTMLElement>()

	const words = text.split(/\s+/).filter(Boolean)

	return (
		<section ref={containerRef} className={s.section}>
			{/* Optional background image */}
			{backgroundImage && (
				<>
					<div className={s.media}>
						<ParallaxImage image={backgroundImage} />
					</div>
					<div
						className={s.overlay}
						style={{ opacity: overlayOpacity }}
					/>
				</>
			)}

			<div className={s.content}>
				{caption && <p className={s.caption}>{caption}</p>}
				<p className={`${s.text} ${backgroundImage ? s.textInverse : ''}`}>
					{words.map((word, index) => (
						<span
							key={index}
							ref={setWordRef(index)}
							className={s.word}
						>
							{word}{' '}
						</span>
					))}
				</p>
			</div>
		</section>
	)
}
