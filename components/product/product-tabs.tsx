"use client"

import { useState } from 'react'
import type { ProductReview, ProductTab } from '@/lib/data/product-detail'
import { ProductReviews } from '@/components/product/product-reviews'
import s from './product-tabs.module.css'

interface ProductTabsProps {
	tabs: ProductTab[]
	reviews: ProductReview[]
}

export function ProductTabs({ tabs, reviews }: ProductTabsProps) {
	const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '')
	const current = tabs.find((tab) => tab.id === activeTab)

	return (
		<section className={s.wrapper}>
			<div className={s.tabs}>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						type='button'
						className={`${s.tab} ${tab.id === activeTab ? s.tabActive : ''}`}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</div>
			{current && (
				<div className={s.panel}>
					{current.id === 'reviews' ? (
						<ProductReviews reviews={reviews} />
					) : (
						current.content.map((block, index) => {
							if (block.type === 'paragraph') {
								return <p key={index}>{block.value as string}</p>
							}
							if (block.type === 'list') {
								return (
									<ul key={index}>
										{(block.value as string[]).map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								)
							}
							return null
						})
					)}
				</div>
			)}
		</section>
	)
}
