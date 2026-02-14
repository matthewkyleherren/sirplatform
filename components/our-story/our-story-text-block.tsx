'use client'

import { useTextReveal } from '@/lib/hooks/use-text-reveal'
import s from './our-story-text-block.module.css'

const BLOCK_TEXT =
	'Meticulously crafted across Europe, each P448 pair is created for those who make standing out their status quo. Blending premium materials, bold design, rebellious spirit and an undeniable curiosity for innovation, our footwear pushes the boundaries of personal style and design possibility.'

export function OurStoryTextBlock() {
	const { containerRef, setWordRef } = useTextReveal<HTMLElement>()
	const words = BLOCK_TEXT.split(/\s+/).filter(Boolean)

	return (
		<section ref={containerRef} className={s.section}>
			<div className={s.content}>
				<p className={s.kicker}>Redefining Modern Footwear</p>
				<p className={s.text}>
					{words.map((word, i) => (
						<span key={i} ref={setWordRef(i)} className={s.word}>
							{word}{' '}
						</span>
					))}
				</p>
			</div>
		</section>
	)
}
