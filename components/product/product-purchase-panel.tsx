"use client"

import { useMemo, useState } from 'react'
import type { ProductDetail } from '@/lib/data/product-detail'
import { formatPrice } from '@/lib/data/product-detail'
import { ProductModal } from './product-modal'
import s from './product-purchase-panel.module.css'

interface ProductPurchasePanelProps {
	product: ProductDetail
}

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
	const [selectedSize, setSelectedSize] = useState<string>()

	const priceLabel = useMemo(() => formatPrice(product.price, product.currency), [product.price, product.currency])
	const selectedEntry = product.sizes.find((size) => size.eu === selectedSize)

	const formatSizeLabel = (size?: { eu: string; us: string }) =>
		size ? `EU ${size.eu} / ${size.us}` : 'Select'

	return (
		<div className={s.panel}>
			<header className={s.header}>
				<div className={s.titleRow}>
					<h1 className={s.productName}>{product.name}</h1>
					<button className={s.wishlist} type="button" aria-label="Add to wishlist">
						<svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								stroke="currentColor"
								d="M13.78 2H3.22C3.0985 2 3 2.09934 3 2.22189V14.7777C3 14.9753 3.23697 15.0743 3.37556 14.9346L8.34444 9.92302C8.43035 9.83637 8.56965 9.83637 8.65556 9.92302L13.6244 14.9346C13.763 15.0743 14 14.9753 14 14.7777V2.22189C14 2.09934 13.9015 2 13.78 2Z"
							/>
						</svg>
					</button>
				</div>
				<p className={s.price}>{priceLabel}</p>
				<div className={s.taxRow}>
					<span>{product.taxMessage}</span>
					<a href="/pages/faq">View terms</a>
				</div>
			</header>

			<div className={s.description}>
				<p>{product.description}</p>
				<button type='button' className={s.readMore}>
					Read more
				</button>
			</div>

			<div className={s.detailNav}>
				<ProductModal title='Details' triggerLabel='Details' triggerClassName={s.detailLink}>
					<ul>
						{product.materials.map((material) => (
							<li key={material}>{material}</li>
						))}
					</ul>
				</ProductModal>
				<ProductModal title='Product care' triggerLabel='Product care' triggerClassName={s.detailLink}>
					<ul>
						{product.careNotes.map((note) => (
							<li key={note}>{note}</li>
						))}
					</ul>
				</ProductModal>
				<ProductModal title='Shipping & returns' triggerLabel='Shipping & returns' triggerClassName={s.detailLink}>
					<ul>
						{product.shippingNotes.map((note) => (
							<li key={note}>{note}</li>
						))}
					</ul>
				</ProductModal>
				<div className={s.detailRow}>
					<span>Estimated delivery</span>
					<span>{product.deliveryEstimate}</span>
				</div>
			</div>

			<div className={s.sizeCard}>
				<div className={s.sizeHeader}>
					<span>Size</span>
					<button className={s.sizeGuide} type='button'>
						Size Guide →
					</button>
				</div>
				<button className={s.selector} type='button' onClick={() => setSelectedSize(selectedEntry ? undefined : product.sizes[0].eu)}>
					<span>{formatSizeLabel(selectedEntry)}</span>
					<span>›</span>
				</button>
				<button className={s.ctaButton} type='button'>
					Add to bag
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
						<path
							fill='currentColor'
							d='M7.5 8V5h-1v3h1Zm4-3h-4v-1h4v1Zm.5.5V8h1V5h-1Zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 12 3.5v1Zm-4-.5a.5.5 0 0 1 .5-.5v-1A1.5 1.5 0 0 0 6.5 5h1Zm-3 2.5h10v-1H5v1Zm10.5.5v6h1V9h-1Zm-.5 6.5H5v1h10v-1Zm-10.5 0V9h-1v6h1Zm.5.5a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 5 16.5v-1Zm10.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm0-8a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 15 7.5v1Zm-10-1A1.5 1.5 0 0 0 3.5 9h1a.5.5 0 0 1 .5-.5v-1Z'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
