import NextImage from 'next/image'
import s from './our-story-pillars.module.css'

const shoes = [
	{ src: '/images/our-story/pillar-shoe-1.jpg', alt: 'P448 white sneaker' },
	{ src: '/images/our-story/pillar-shoe-2.jpg', alt: 'P448 green sneaker' },
	{ src: '/images/our-story/pillar-shoe-3.jpg', alt: 'P448 tan sneaker' },
]

export function OurStoryPillars() {
	return (
		<section className={s.section}>
			<div className={s.textBlock}>
				<h2 className={s.title}>Our Pillars</h2>
				<p className={s.subtitle}>Craftsmanship. Comfort. Culture.</p>
				<p className={s.body}>
					At P448, we root ourselves in three pillars that define who we
					are, what we create and how we hope to evolve the world of
					footwear — through craftsmanship, comfort and culture.
					Influenced by our Italian heritage, quality craftsmanship is
					at the core of every product, from the materials we source to
					the meticulous stitching and final lace.
				</p>
			</div>

			<div className={s.shoesRow}>
				{shoes.map((shoe, i) => (
					<div key={i} className={s.shoeCard}>
						<NextImage
							src={shoe.src}
							alt={shoe.alt}
							fill
							className={s.shoeImage}
							sizes="(max-width: 767px) 80vw, 30vw"
						/>
					</div>
				))}
			</div>
		</section>
	)
}
