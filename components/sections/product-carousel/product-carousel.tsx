'use client'

import { useRef } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { ProductCarouselSection } from '@/lib/data/types'
import { Link } from '@/components/link'
import { ProductCard } from './product-card'
import s from './product-carousel.module.css'

interface ProductCarouselProps {
	data: ProductCarouselSection
}

export function ProductCarousel({ data }: ProductCarouselProps) {
	const { title, viewAllLink, products } = data

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		mode: 'snap',
		slides: {
			perView: 3,
			spacing: 0,
		},
		breakpoints: {
			'(max-width: 900px)': {
				slides: { perView: 2.5, spacing: 0 },
			},
			'(max-width: 767px)': {
				slides: { perView: 1.5, spacing: 0 },
			},
		},
	})

	const handlePrev = () => {
		instanceRef.current?.prev()
	}

	const handleNext = () => {
		instanceRef.current?.next()
	}

	return (
		<section className={s.section}>
			<div className={s.header}>
				<h2 className={s.headerTitle}>{title}</h2>
				<div className={s.headerActions}>
					<Link href={viewAllLink} className={s.headerLink}>
						Shop Now
					</Link>
					<div className={s.headerArrows}>
						<button
							type="button"
							className={s.arrowButton}
							onClick={handlePrev}
							aria-label="Previous products"
						>
							<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="m7.823 1.646.708.708L4.884 6l3.647 3.646-.708.707L3.47 6l4.354-4.354Z"
									fill="currentColor"
								/>
							</svg>
						</button>
						<button
							type="button"
							className={s.arrowButton}
							onClick={handleNext}
							aria-label="Next products"
						>
							<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="m4.177 1.646-.708.708L7.116 6 3.469 9.646l.708.707L8.53 6 4.177 1.646Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className={s.carousel}>
				<div ref={sliderRef} className="keen-slider">
					{products.map((product) => (
						<div key={product.id} className="keen-slider__slide">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
