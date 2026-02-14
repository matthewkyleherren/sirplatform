'use client'

import { useState } from 'react'
import type { Product } from '@/lib/data/types'
import { Image } from '@/components/image'
import { Link } from '@/components/link'
import s from './product-carousel.module.css'

interface ProductCardProps {
	product: Product
}

export function ProductCard({ product }: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false)

	const formattedPrice = new Intl.NumberFormat('en-EU', {
		style: 'currency',
		currency: product.currency,
		minimumFractionDigits: 2,
	}).format(product.price)

	const formattedComparePrice = product.compareAtPrice
		? new Intl.NumberFormat('en-EU', {
				style: 'currency',
				currency: product.currency,
				minimumFractionDigits: 2,
			}).format(product.compareAtPrice)
		: null

	return (
		<article
			className={s.card}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Faux-link covering entire card */}
			<Link href={product.href} className={s.cardLink} aria-label={product.name}>
				<span className={s.srOnly}>{product.name}</span>
			</Link>

			{/* Image container */}
			<div className={s.cardMediaContainer}>
				{product.tags.length > 0 && (
					<div className={s.cardTags}>
						{product.tags.map((tag) => (
							<p key={tag} className={s.cardTag}>{tag}</p>
						))}
					</div>
				)}
				<div className={s.cardImages}>
					<div className={`${s.cardImage} ${isHovered ? s.cardImageHidden : ''}`}>
						<Image
							src={product.images.primary}
							width={540}
							height={675}
							alt={product.name}
							className={s.cardImg}
							sizes="(max-width: 767px) 80vw, 25vw"
						/>
					</div>
					<div className={`${s.cardImage} ${s.cardImageHover} ${isHovered ? s.cardImageVisible : ''}`}>
						<Image
							src={product.images.hover}
							width={540}
							height={675}
							alt={product.name}
							className={s.cardImg}
							sizes="(max-width: 767px) 80vw, 25vw"
						/>
					</div>
				</div>
			</div>

			{/* Card body */}
			<div className={s.cardBody}>
				<h3 className={s.cardTitle}>{product.name}</h3>
				<div className={s.cardContent}>
					<div className={s.cardPriceRow}>
						<p className={s.cardPrice}>
							{formattedComparePrice && (
								<span className={s.cardComparePrice}>{formattedComparePrice}</span>
							)}
							<span>{formattedPrice}</span>
						</p>
						<button
							type="button"
							className={s.cardQuickAdd}
							aria-label={`Quick add ${product.name}`}
						>
							<span className={s.cardQuickAddText}>Quick add</span>
						</button>
					</div>
					{product.colors.length > 0 && (
						<div className={s.cardColors}>
							{product.colors.map((color) => (
								<Link
									key={color.name}
									href={color.href}
									className={s.cardColor}
									style={{ '--swatch-color': color.hex } as React.CSSProperties}
									aria-label={color.name}
								>
									<span className={s.srOnly}>{color.name}</span>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</article>
	)
}
