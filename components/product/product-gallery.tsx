"use client"

import { useEffect, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Image } from '@/components/image'
import type { ProductGalleryImage, ProductSize } from '@/lib/data/product-detail'
import s from './product-gallery.module.css'

interface ProductGalleryProps {
	images: ProductGalleryImage[]
	productName: string
	sizes: ProductSize[]
}

export function ProductGallery({ images, productName, sizes }: ProductGalleryProps) {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [zoomOpen, setZoomOpen] = useState(false)
	const [zoomIndex, setZoomIndex] = useState(0)
	const galleryRef = useRef<HTMLDivElement>(null)

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: false,
			dragSpeed: 0.8,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel)
			},
		},
		[],
	)

	useEffect(() => {
		const container = galleryRef.current
		if (!container) return

		const onWheel = (event: WheelEvent) => {
			const slider = instanceRef.current
			if (!slider) return

			const lastIndex = slider.track.details.slides.length - 1
			if (event.deltaY > 0 && currentSlide < lastIndex) {
				event.preventDefault()
				slider.next()
			} else if (event.deltaY < 0 && currentSlide > 0) {
				event.preventDefault()
				slider.prev()
			}
		}

		container.addEventListener('wheel', onWheel, { passive: false })
		return () => container.removeEventListener('wheel', onWheel)
	}, [currentSlide, instanceRef])

	const openZoom = (index: number) => {
		setZoomIndex(index)
		setZoomOpen(true)
	}

	return (
		<>
			<div ref={galleryRef} className={s.gallery}>
				<div ref={sliderRef} className={`keen-slider ${s.slider}`}>
					{images.map((image, index) => (
						<div key={image.id} className={`keen-slider__slide ${s.slide}`}>
							<button type="button" onClick={() => openZoom(index)}>
								<Image
									src={image.src}
									alt={image.alt}
									width={image.width}
									height={image.height}
									className={s.slideImage}
									priority={index === 0}
									sizes="(max-width: 768px) 100vw, 70vw"
								/>
							</button>
						</div>
					))}
				</div>

				<div className={s.thumbnails} aria-hidden="true">
					{images.map((image, index) => (
						<button
							key={`thumb-${image.id}`}
							type="button"
							className={s.thumbnailButton}
							onClick={() => instanceRef.current?.moveToIdx(index)}
							aria-pressed={currentSlide === index}
						>
							<Image src={image.src} alt="" width={80} height={80} className={s.thumbnailImage} />
						</button>
					))}
				</div>

				<p className={s.hint}>Scroll</p>

				<div className={s.dots} aria-hidden="true">
					{images.map((_, index) => (
						<span key={`dot-${index}`} className={`${s.dot} ${currentSlide === index ? s.dotActive : ''}`} />
					))}
				</div>
			</div>

			<ZoomDialog
				open={zoomOpen}
				onOpenChange={setZoomOpen}
				initialIndex={zoomIndex}
				images={images}
				productName={productName}
				sizes={sizes}
			/>
		</>
	)
}

interface ZoomDialogProps {
	open: boolean
	onOpenChange: (state: boolean) => void
	initialIndex: number
	images: ProductGalleryImage[]
	productName: string
	sizes: ProductSize[]
}

function ZoomDialog({ open, onOpenChange, initialIndex, images, productName, sizes }: ZoomDialogProps) {
	const [zoomRef, zoomInstance] = useKeenSlider<HTMLDivElement>({ loop: false }, [])

	useEffect(() => {
		if (open) {
			requestAnimationFrame(() => {
				zoomInstance.current?.moveToIdx(initialIndex, true)
			})
		}
	}, [open, initialIndex, zoomInstance])

	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className={s.zoomOverlay} />
				<Dialog.Content className={s.zoomContent}>
					<button className={s.zoomClose} type="button" onClick={() => onOpenChange(false)}>
						Close
					</button>
					<div className={s.zoomGallery}>
						<div ref={zoomRef} className="keen-slider">
							{images.map((image) => (
								<div key={`zoom-${image.id}`} className="keen-slider__slide">
									<Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" />
								</div>
							))}
						</div>
					</div>
					<div className={s.zoomMeta}>
						<p className={s.zoomTitle}>{productName}</p>
						<div className={s.zoomSizes}>
							<p className={s.zoomSizeLabel}>Sizes</p>
							<div className={s.zoomSizeGrid}>
								{sizes.map((size) => (
									<button key={`zoom-size-${size.eu}`} type="button" className={s.zoomSizeButton}>
										EU {size.eu} / {size.us}
									</button>
								))}
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
