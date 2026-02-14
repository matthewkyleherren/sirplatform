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
			<div className={s.media}>
				<Image
					src="/images/our-story/hero-desktop.jpg"
					alt="P448 craftsmanship"
					fill
					className={s.image}
					priority
					sizes="100vw"
				/>
			</div>
			<div className={s.overlay} />
			<div className={s.content}>
				<AnimateIn>
					<AnimateInContent>
						<p className={s.kicker}>The World of P448</p>
					</AnimateInContent>
					<AnimateInWords
						text="You Can Surf Later"
						tag="h1"
						className={s.title}
					/>
					<AnimateInContent>
						<p className={s.description}>
							P448 blends timeless design, thoughtful details and modern
							influence to create more than just footwear — it{"'"}s a spirit
							stitched with Italian heritage, craftsmanship and cutting-edge
							comfort.
						</p>
					</AnimateInContent>
					<AnimateInContent>
						<p className={s.body}>
							Founded in 2014 in Forli, Italy, P448 has always been an
							exploration of creativity, personal style, and expert
							craftsmanship. What started as a passion project between friends
							became a forward-thinking footwear brand that draws inspiration
							from travel, street cultures and technical skills — all in the
							name of experimentation and expression. At our core, we are
							seekers, in life and in style. {'"'}You Can Surf Later{'"'} is our
							way of saying to enjoy life{"'"}s adventures, wherever our feet
							take us.
						</p>
					</AnimateInContent>
				</AnimateIn>
			</div>
		</section>
	)
}
