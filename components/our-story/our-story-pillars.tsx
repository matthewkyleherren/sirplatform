'use client'

import { Image } from '@/components/image'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-pillars.module.css'

export function OurStoryPillars() {
	return (
		<section className={s.section}>
			<div className={s.inner}>
				<div className={s.grid}>
					{/* Text column */}
					<div className={s.textColumn}>
						<AnimateIn>
							<AnimateInContent>
								<p className={s.kicker}>Our Pillars</p>
							</AnimateInContent>
							<AnimateInWords
								text="Craftsmanship. Comfort. Culture."
								tag="h2"
								className={s.title}
							/>
							<AnimateInContent>
								<h3 className={s.subtitle}>
									At P448, we root ourselves in three pillars that define who we
									are, what we create and how we hope to evolve the world of
									footwear — through craftsmanship, comfort and culture.
								</h3>
								<p className={s.body}>
									Influenced by our Italian heritage, quality craftsmanship is
									at the core of every product, from the materials we source to
									the meticulous stitching and final lace. We believe that with
									great craft comes incomparable comfort, without compromising
									on style. Style is a culmination of the world and cultures
									around us, inspiring how we use color palettes, silhouettes
									and innovative materials to express ourselves through the very
									footwear we choose to wear each day.
								</p>
							</AnimateInContent>
						</AnimateIn>
					</div>

					{/* Image column */}
					<div className={s.imageColumn}>
						<div className={s.imageWrapper}>
							<Image
								src="/images/our-story/pillars-desktop.jpg"
								alt="P448 craftsmanship, comfort and culture"
								fill
								className={s.image}
								sizes="(max-width: 767px) 100vw, 50vw"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
