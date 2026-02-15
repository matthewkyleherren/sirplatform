import NextImage from 'next/image'
import s from './our-story-hero.module.css'

export function OurStoryHero() {
	return (
		<section className={s.section}>
			<div className={s.media}>
				<NextImage
					src="/images/our-story/hero-desktop.jpg"
					alt="P448 craftsmanship workshop"
					fill
					className={s.image}
					priority
					sizes="100vw"
				/>
			</div>
			<div className={s.content}>
				<h1 className={s.title}>
					The World Of<br />P448
				</h1>
				<p className={s.intro}>
					P448 blends timeless design, thoughtful details and modern
					influence to create more than just footwear — it{"'"}s a spirit
					stitched with Italian heritage, craftsmanship and cutting-edge
					comfort.
				</p>
			</div>
		</section>
	)
}
