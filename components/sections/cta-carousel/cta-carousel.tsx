'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import type { CTACarouselSection, CTACarouselSlide } from '@/lib/data/types'
import { ResponsiveMedia } from '@/components/primitives/responsive-media'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import { Link } from '@/components/link'
import s from './cta-carousel.module.css'

interface CTACarouselProps {
	data: CTACarouselSection
}

export function CTACarousel({ data }: CTACarouselProps) {
	const { kicker, slides } = data

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		mode: 'snap',
		slides: {
			perView: 1,
			spacing: 0,
		},
		loop: true,
	})

	const handlePrev = () => {
		instanceRef.current?.prev()
	}

	const handleNext = () => {
		instanceRef.current?.next()
	}

	return (
		<section className={s.section}>
			{kicker && <p className={s.kicker}>{kicker}</p>}

			<div className={s.carouselWrapper}>
				<div ref={sliderRef} className="keen-slider">
					{slides.map((slide, index) => (
						<div key={index} className="keen-slider__slide">
							<Slide slide={slide} />
						</div>
					))}
				</div>

				{/* Navigation arrows */}
				<div className={s.arrows}>
					<button
						type="button"
						className={s.arrowButton}
						onClick={handlePrev}
						aria-label="Previous slide"
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
						aria-label="Next slide"
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
		</section>
	)
}

function Slide({ slide }: { slide: CTACarouselSlide }) {
	return (
		<div className={s.slide}>
			<div className={s.slideMedia}>
				<ResponsiveMedia media={slide.media} />
			</div>
			<div className={s.slideContent}>
				<AnimateIn>
					{slide.kicker && (
						<AnimateInContent>
							<p className={s.slideKicker}>{slide.kicker}</p>
						</AnimateInContent>
					)}
					<AnimateInWords text={slide.title} tag="h2" className={s.slideTitle} />
					{slide.description && (
						<AnimateInContent>
							<p className={s.slideDescription}>{slide.description}</p>
						</AnimateInContent>
					)}
					<AnimateInContent>
						<Link
							href={slide.button.href}
							className={`${s.slideButton} ${slide.button.variant === 'primary' ? s.slideButtonPrimary : s.slideButtonSecondary}`}
						>
							<span>{slide.button.label}</span>
						</Link>
					</AnimateInContent>
				</AnimateIn>
			</div>
		</div>
	)
}
