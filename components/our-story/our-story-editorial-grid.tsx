'use client'

import { Image } from '@/components/image'
import { Link } from '@/components/link'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-editorial-grid.module.css'

const editorials = [
	{
		image: '/images/our-story/editorial-fw25.jpg',
		kicker: 'FW25 Campaign',
		title: 'FW25 Campaign',
		description:
			'Join us on a journey through the making of this collection, featuring chapter-by-chapter releases that give you a glimpse inside our inspiration, materials, craftsmanship and production.',
		cta: 'Start The Journey',
		href: '#',
		featured: true,
	},
	{
		image: '/images/our-story/editorial-vibram.jpg',
		kicker: 'Collaboration',
		title: 'P448 x Vibram',
		description:
			'In a one-of-its-kind capsule, P448 x Vibram builds on technical performance soles with innovative adventure-ready silhouettes.',
		cta: 'Discover more',
		href: '#',
		featured: false,
	},
	{
		image: '/images/our-story/editorial-python.jpg',
		kicker: 'Sustainability',
		title: 'Burmese Python',
		description:
			"Part of our Project Sustainability initiative, Burmese Python is our innovative take on sustainable snakeskin crafted to protect native animals & their resources.",
		cta: 'Discover more',
		href: '#',
		featured: false,
	},
	{
		image: '/images/our-story/editorial-katz.jpg',
		kicker: 'Special Edition',
		title: 'P448 x Alex Katz',
		description:
			"This collector's capsule captures world-renowned artist Katz's unique style and signature minimalistic palette in an intentionally artful silhouette.",
		cta: 'Discover more',
		href: '#',
		featured: false,
	},
]

export function OurStoryEditorialGrid() {
	const featured = editorials[0]
	const rest = editorials.slice(1)

	return (
		<section className={s.section}>
			<p className={s.sectionKicker}>Latest From P448</p>

			{/* Featured card - full width */}
			{featured && (
				<div className={s.featured}>
					<div className={s.featuredMedia}>
						<Image
							src={featured.image}
							alt={featured.title}
							fill
							className={s.featuredImage}
							sizes="100vw"
						/>
					</div>
					<div className={s.featuredOverlay} />
					<div className={s.featuredContent}>
						<AnimateIn>
							<AnimateInContent>
								<p className={s.cardKicker}>{featured.kicker}</p>
							</AnimateInContent>
							<AnimateInWords
								text={featured.title}
								tag="h2"
								className={s.featuredTitle}
							/>
							<AnimateInContent>
								<p className={s.featuredDescription}>{featured.description}</p>
								<Link href={featured.href} className={s.cardLink}>
									{featured.cta}
								</Link>
							</AnimateInContent>
						</AnimateIn>
					</div>
				</div>
			)}

			{/* Grid of remaining cards */}
			<div className={s.grid}>
				{rest.map((item) => (
					<div key={item.title} className={s.card}>
						<div className={s.cardMedia}>
							<Image
								src={item.image}
								alt={item.title}
								fill
								className={s.cardImage}
								sizes="(max-width: 767px) 100vw, 33vw"
							/>
						</div>
						<div className={s.cardOverlay} />
						<div className={s.cardContent}>
							<AnimateIn>
								<AnimateInContent>
									<p className={s.cardKicker}>{item.kicker}</p>
								</AnimateInContent>
								<AnimateInWords
									text={item.title}
									tag="h3"
									className={s.cardTitle}
								/>
								<AnimateInContent>
									<p className={s.cardDescription}>{item.description}</p>
									<Link href={item.href} className={s.cardLink}>
										{item.cta}
									</Link>
								</AnimateInContent>
							</AnimateIn>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
