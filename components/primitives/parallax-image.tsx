'use client'

import type { CSSProperties } from 'react'
import { Image } from '@/components/image'
import type { ResponsiveImage } from '@/lib/data/types'
import { useParallax } from '@/lib/hooks/use-parallax'

interface UseParallaxOptions {
	desktopAmount?: number
	mobileAmount?: number
	activationDelay?: number
	respectReducedMotion?: boolean
}

interface ParallaxImageProps {
	image: ResponsiveImage
	parallaxOptions?: UseParallaxOptions
	className?: string
	style?: CSSProperties
	/** Extra scale factor so the image is larger than its container, allowing parallax movement. Default: 1.15 */
	oversize?: number
	/** Mark as high-priority LCP image */
	priority?: boolean
}

export function ParallaxImage({
	image,
	parallaxOptions,
	className,
	style,
	oversize = 1.15,
	priority = false,
}: ParallaxImageProps) {
	const parallaxRef = useParallax<HTMLDivElement>(parallaxOptions)

	return (
		<div
			className={className}
			style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', ...style }}
		>
			<div
				ref={parallaxRef}
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					transform: 'scale(1)',
				}}
			>
				{/* Desktop image: hidden below md */}
				<Image
					src={image.desktop.src}
					width={image.desktop.width}
					height={image.desktop.height}
					alt={image.desktop.alt}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						transform: `scale(${oversize})`,
					}}
					className="hidden md:block"
					sizes="100vw"
					{...(priority ? { priority: true } : {})}
				/>
				{/* Mobile image: visible below md */}
				<Image
					src={image.mobile.src}
					width={image.mobile.width}
					height={image.mobile.height}
					alt={image.mobile.alt}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						transform: `scale(${oversize})`,
					}}
					className="block md:hidden"
					sizes="100vw"
					{...(priority ? { priority: true } : {})}
				/>
			</div>
		</div>
	)
}
