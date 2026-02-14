'use client'

import { Image } from '@/components/image'
import { Link } from '@/components/link'
import {
	AnimateIn,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-editorial-grid.module.css'

const editorialImages = [
	{ src: '/images/our-story/editorial-fw25.jpg', alt: 'FW25 Campaign editorial 1' },
	{ src: '/images/our-story/editorial-vibram.jpg', alt: 'FW25 Campaign editorial 2' },
	{ src: '/images/our-story/editorial-python.jpg', alt: 'FW25 Campaign editorial 3' },
	{ src: '/images/our-story/editorial-katz.jpg', alt: 'FW25 Campaign editorial 4' },
]

export function OurStoryEditorialGrid() {
	return (
		<section className={s.section}>
			{/* Image mosaic row */}
			<div className={s.mosaic}>
				{editorialImages.map((img, i) => (
					<div key={i} className={s.mosaicItem}>
						<div className={s.mosaicMedia}>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								className={s.mosaicImage}
								sizes="(max-width: 767px) 50vw, 25vw"
							/>
						</div>
					</div>
				))}
			</div>

			{/* Centered text block below */}
			<div className={s.content}>
				<AnimateIn>
					<AnimateInContent>
						<h2 className={s.title}>FW25 Campaign</h2>
						<p className={s.description}>
							Join us on a journey through the making of this collection,
							featuring chapter-by-chapter releases that give you a glimpse
							inside our inspiration, materials, craftsmanship and production.
							In a one-of-its-kind capsule, P448 builds on technical
							performance with innovative adventure-ready silhouettes, marrying
							bold design with expert Italian craft.
						</p>
						<Link href="#" className={s.link}>
							Start The Journey
						</Link>
					</AnimateInContent>
				</AnimateIn>
			</div>
		</section>
	)
}
