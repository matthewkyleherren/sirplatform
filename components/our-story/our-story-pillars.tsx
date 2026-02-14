'use client'

import { Image } from '@/components/image'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-pillars.module.css'

const pillarShoes = [
	{ src: '/images/our-story/pillar-shoe-1.jpg', alt: 'P448 white sneaker' },
	{ src: '/images/our-story/pillar-shoe-2.jpg', alt: 'P448 green sneaker' },
	{ src: '/images/our-story/pillar-shoe-3.jpg', alt: 'P448 tan sneaker' },
]

export function OurStoryPillars() {
	return (
		<section className={s.section}>
			<div className={s.inner}>
				{/* Text content */}
				<div className={s.textBlock}>
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
							<p className={s.body}>
								At P448, we root ourselves in three pillars that define who we
								are, what we create and how we hope to evolve the world of
								footwear — through craftsmanship, comfort and culture.
								Influenced by our Italian heritage, quality craftsmanship is
								at the core of every product, from the materials we source to
								the meticulous stitching and final lace.
							</p>
						</AnimateInContent>
					</AnimateIn>
				</div>

				{/* Product shoe images row */}
				<div className={s.shoesRow}>
					{pillarShoes.map((shoe, i) => (
						<div key={i} className={s.shoeItem}>
							<div className={s.shoeMedia}>
								<Image
									src={shoe.src}
									alt={shoe.alt}
									fill
									className={s.shoeImage}
									sizes="(max-width: 767px) 80vw, 30vw"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
