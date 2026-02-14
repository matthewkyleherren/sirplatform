'use client'

import { Image } from '@/components/image'
import {
	AnimateIn,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-material-ticker.module.css'

const TICKER_TEXT = 'Material Innovation'

export function OurStoryMaterialTicker() {
	return (
		<section className={s.section}>
			{/* Ticker rows */}
			<div className={s.tickerBlock}>
				{Array.from({ length: 3 }).map((_, row) => (
					<div key={row} className={`${s.track} ${row % 2 === 1 ? s.trackReverse : ''}`}>
						{Array.from({ length: 6 }).map((_, i) => (
							<span key={i} className={s.tickerText} aria-hidden={i > 0 || row > 0 ? 'true' : undefined}>
								{TICKER_TEXT}
								<span className={s.separator} aria-hidden="true">{' \u2014 '}</span>
							</span>
						))}
					</div>
				))}
			</div>

			{/* Content below ticker */}
			<div className={s.content}>
				<div className={s.contentGrid}>
					<div className={s.contentMedia}>
						<div className={s.imageWrapper}>
							<Image
								src="/images/our-story/materials-desktop.jpg"
								alt="Material innovation"
								fill
								className={s.image}
								sizes="(max-width: 767px) 100vw, 50vw"
							/>
						</div>
					</div>
					<div className={s.contentText}>
						<AnimateIn>
							<AnimateInContent>
								<p className={s.kicker}>Material index</p>
								<p className={s.body}>
									Our commitment to crafting responsible sneakers encourages us
									to think creatively about the materials we use, from recycled,
									regenerative and bio-based fabrics and fibers.
								</p>
								<p className={s.footnote}>
									Since 2024, P448 has been committed to the UN Global Compact
									corporate responsibility initiative and its principles in the
									areas of human rights, labor, environment and
									anti-corruption.
								</p>
							</AnimateInContent>
						</AnimateIn>
					</div>
				</div>
			</div>
		</section>
	)
}
