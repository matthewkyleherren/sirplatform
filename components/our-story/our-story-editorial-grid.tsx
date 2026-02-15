import NextImage from 'next/image'
import s from './our-story-editorial-grid.module.css'

const editorialImages = [
	{ src: '/images/our-story/editorial-fw25.jpg', alt: 'FW25 Campaign editorial' },
	{ src: '/images/our-story/editorial-vibram.jpg', alt: 'Vibram collaboration' },
	{ src: '/images/our-story/editorial-python.jpg', alt: 'Python collection' },
	{ src: '/images/our-story/editorial-katz.jpg', alt: 'Katz collaboration' },
]

export function OurStoryEditorialGrid() {
	return (
		<section className={s.section}>
			<div className={s.mosaic}>
				{editorialImages.map((img, i) => (
					<div key={i} className={s.mosaicItem}>
						<NextImage
							src={img.src}
							alt={img.alt}
							fill
							className={s.mosaicImage}
							sizes="(max-width: 767px) 50vw, 25vw"
						/>
					</div>
				))}
			</div>

			<div className={s.content}>
				<h2 className={s.title}>FW25 Campaign</h2>
				<p className={s.description}>
					Join us on a journey through the making of this collection,
					featuring chapter-by-chapter releases that give you a glimpse
					inside our inspiration, materials, craftsmanship and production.
					In a one-of-its-kind capsule, P448 builds on technical
					performance with innovative adventure-ready silhouettes, marrying
					bold design with expert Italian craft.
				</p>
				<a href="#" className={s.link}>
					<span className={s.linkDot} />
					Start The Journey
				</a>
			</div>
		</section>
	)
}
