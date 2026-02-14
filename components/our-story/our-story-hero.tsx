'use client'

import { Image } from '@/components/image'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-hero.module.css'

export function OurStoryHero() {
	return (
		<section className={s.section}>
			{/* Full-bleed background image */}
			<div className={s.media}>
				<Image
					src="/images/our-story/hero-desktop.jpg"
					alt="P448 craftsmanship workshop"
					fill
					className={s.image}
					priority
					sizes="100vw"
				/>
			</div>

			{/* Text overlay on the left */}
			<div className={s.content}>
				<AnimateIn>
					<AnimateInWords
						text="The World Of P448"
						tag="h1"
						className={s.title}
					/>
					<AnimateInContent>
						<p className={s.intro}>
							P448 blends timeless design, thoughtful details and modern
							influence to create more than just footwear — it{"'"}s a spirit
							stitched with Italian heritage, craftsmanship and cutting-edge
							comfort.
						</p>
					</AnimateInContent>
					<AnimateInContent>
						<p className={s.body}>
							You asked for P448er? Let{"'"}s Talk. P448
							has always been an exploration of
							creativity, personal style, and expert
							craftsmanship. What started as a
							passion project between friends
							became a forward thinking footwear
							brand, street cultures and bold mood
							all in the name of
							experimentation and expression. At
							our core, we are seekers, in life and in
							style. {'"'}You Can Surf Later{'"'} is our
							way of saying to enjoy life{"'"}s adventures,
							wherever our feet take us.
						</p>
					</AnimateInContent>
				</AnimateIn>
			</div>
		</section>
	)
}
