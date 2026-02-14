'use client'

import type { CTASingleSection, QuickProduct } from '@/lib/data/types'
import { ParallaxImage } from '@/components/primitives/parallax-image'
import { LazyVideo } from '@/components/primitives/lazy-video'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import { Link } from '@/components/link'
import { Image } from '@/components/image'
import s from './cta-single.module.css'

interface CTASingleProps {
	data: CTASingleSection
	priority?: boolean
}

export function CTASingle({ data, priority = false }: CTASingleProps) {
	const { media, title, kicker, description, buttons, quickProducts, floatingMenu } = data

	return (
		<section className={s.section}>
			{/* Background media */}
			<div className={s.media}>
				<ParallaxImage image={media.image} priority={priority} />
				{media.type === 'video' && media.video && (
					<div className={s.videoOverlay}>
						<LazyVideo desktop={media.video.desktop} mobile={media.video.mobile} />
					</div>
				)}
			</div>

			{/* Quick products floating overlay */}
			{quickProducts && quickProducts.length > 0 && (
				<div className={s.quickProducts}>
					{quickProducts.map((product) => (
						<QuickProductDot key={product.name} product={product} />
					))}
				</div>
			)}

			{floatingMenu && (
				<div className={s.floatingMenu}>
					<button type="button" className={s.floatingToggle} aria-haspopup="true" aria-label={floatingMenu.label}>
						<span>+</span>
					</button>
					<div className={s.floatingPanel}>
						<p className={s.floatingLabel}>{floatingMenu.label}</p>
						<ul className={s.floatingList}>
							{floatingMenu.links.map((link) => (
								<li key={link.label}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}

			{/* Content overlay */}
			<div className={s.content}>
				<AnimateIn>
					{kicker && (
						<AnimateInContent>
							<p className={s.kicker}>{kicker}</p>
						</AnimateInContent>
					)}
					<AnimateInWords text={title} tag="h2" className={s.title} />
					{description && (
						<AnimateInContent>
							<p className={s.description}>{description}</p>
						</AnimateInContent>
					)}
					{buttons.length > 0 && (
						<AnimateInContent>
							<div className={s.buttons}>
								{buttons.map((button) => (
									<Link
										key={button.label}
										href={button.href}
										className={`${s.button} ${button.variant === 'primary' ? s.buttonPrimary : s.buttonSecondary}`}
									>
										<span className={s.buttonText}>{button.label}</span>
									</Link>
								))}
							</div>
						</AnimateInContent>
					)}
				</AnimateIn>
			</div>
		</section>
	)
}

function QuickProductDot({ product }: { product: QuickProduct }) {
	return (
		<div
			className={s.quickProduct}
			style={{
				'--qp-x': product.position.x,
				'--qp-y': product.position.y,
			} as React.CSSProperties}
		>
			<button type="button" className={s.quickProductDot} aria-label={`View ${product.name}`}>
				<span className={s.quickProductPulse} />
			</button>
			<div className={s.quickProductTooltip}>
				<Link href={product.href} className={s.quickProductLink}>
					<Image
						src={product.image}
						width={60}
						height={60}
						alt={product.name}
						className={s.quickProductImage}
					/>
					<span className={s.quickProductName}>{product.name}</span>
				</Link>
			</div>
		</div>
	)
}
