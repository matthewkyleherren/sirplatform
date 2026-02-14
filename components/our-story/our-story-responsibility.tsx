'use client'

import { Image } from '@/components/image'
import { Link } from '@/components/link'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-responsibility.module.css'

const pillars = [
	{
		title: 'Commitment',
		body: 'P448 is a forward-thinking brand dedicated to designing and making products that contribute to a cleaner, greener and more inclusive world. We are committed to using the finest craftsmanship, ecologically friendly materials and sustainable processes.',
	},
	{
		title: 'Collections',
		body: 'Season after season, we continue to expand our Invasive Species and Recycled Materials collections to create regenerative and repurposed leather, suede, cotton and other fibers to help reduce our planetary impact.',
	},
	{
		title: 'Packaging & Shipping',
		body: 'Excess packaging is a thing of the past. You can expect P448 orders to be packed in our patented reusable dustbag that ships to you in a 100% recycled box, without packing slips or single-use paper materials.',
	},
	{
		title: 'Corporate Initiatives',
		body: "Sustainable practices don't just start and end with our products, we implement them in our day-to-day HQ responsibilities.",
	},
]

export function OurStoryResponsibility() {
	return (
		<section className={s.section}>
			{/* Kicker */}
			<p className={s.kicker}>Responsibility</p>

			{/* Pillars grid */}
			<div className={s.grid}>
				{pillars.map((pillar) => (
					<div key={pillar.title} className={s.pillar}>
						<AnimateIn>
							<AnimateInWords
								text={pillar.title}
								tag="h2"
								className={s.pillarTitle}
							/>
							<AnimateInContent>
								<p className={s.pillarBody}>{pillar.body}</p>
							</AnimateInContent>
						</AnimateIn>
					</div>
				))}
			</div>

			{/* Project Sustainability CTA */}
			<div className={s.ctaBlock}>
				<div className={s.ctaMedia}>
					<Image
						src="/images/our-story/sustainability-desktop.jpg"
						alt="Project Sustainability"
						fill
						className={s.ctaImage}
						sizes="100vw"
					/>
				</div>
				<div className={s.ctaOverlay} />
				<div className={s.ctaContent}>
					<AnimateIn>
						<AnimateInContent>
							<p className={s.ctaKicker}>{"Project Sustainability\u00AE"}</p>
						</AnimateInContent>
						<AnimateInWords
							text="Our journey toward a more sustainable future"
							tag="h2"
							className={s.ctaTitle}
						/>
						<AnimateInContent>
							<p className={s.ctaDescription}>
								{"Project Sustainability\u00AE"} marks our most responsible and
								eco-conscious innovations, from recycled materials to ethical
								production practices.
							</p>
							<div className={s.ctaButtons}>
								<Link href="#" className={s.ctaButtonPrimary}>
									Shop now
								</Link>
								<Link href="#" className={s.ctaButtonSecondary}>
									Discover more
								</Link>
							</div>
						</AnimateInContent>
					</AnimateIn>
				</div>
			</div>
		</section>
	)
}
