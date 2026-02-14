'use client'

import type { CTASplitSection, CTAButton, ResponsiveMedia } from '@/lib/data/types'
import { ParallaxImage } from '@/components/primitives/parallax-image'
import { LazyVideo } from '@/components/primitives/lazy-video'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import { Link } from '@/components/link'
import s from './cta-split.module.css'

interface CTASplitProps {
	data: CTASplitSection
}

export function CTASplit({ data }: CTASplitProps) {
	return (
		<section className={s.section}>
			<div className={s.grid}>
				<SplitCard
					media={data.left.media}
					title={data.left.title}
					button={data.left.button}
				/>
				<SplitCard
					media={data.right.media}
					title={data.right.title}
					button={data.right.button}
				/>
			</div>
		</section>
	)
}

interface SplitCardProps {
	media: ResponsiveMedia
	title?: string
	button?: CTAButton
}

function SplitCard({ media, title, button }: SplitCardProps) {
	return (
		<div className={s.card}>
			<div className={s.cardMedia}>
				<ParallaxImage image={media.image} />
				{media.type === 'video' && media.video && (
					<div className={s.cardVideoOverlay}>
						<LazyVideo desktop={media.video.desktop} mobile={media.video.mobile} />
					</div>
				)}
			</div>
			<div className={s.cardContent}>
				<AnimateIn>
					{title && (
						<AnimateInWords text={title} tag="h2" className={s.cardTitle} />
					)}
					{button && (
						<AnimateInContent>
							<div className={s.cardButtons}>
								<Link
									href={button.href}
									className={`${s.cardButton} ${button.variant === 'primary' ? s.cardButtonPrimary : s.cardButtonSecondary}`}
								>
									<span>{button.label}</span>
								</Link>
							</div>
						</AnimateInContent>
					)}
				</AnimateIn>
			</div>
		</div>
	)
}
