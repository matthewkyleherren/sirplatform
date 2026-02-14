'use client'

import type { ResponsiveMedia as ResponsiveMediaType } from '@/lib/data/types'
import { ParallaxImage } from './parallax-image'
import { LazyVideo } from './lazy-video'

interface ResponsiveMediaProps {
	media: ResponsiveMediaType
	className?: string
}

/**
 * Renders either a ParallaxImage or a LazyVideo (with ParallaxImage fallback)
 * based on the media type.
 */
export function ResponsiveMedia({ media, className }: ResponsiveMediaProps) {
	if (media.type === 'video' && media.video) {
		return (
			<div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
				{/* Image fallback behind video */}
				<ParallaxImage
					image={media.image}
					style={{ position: 'absolute', inset: 0, zIndex: 0 }}
				/>
				{/* Video on top */}
				<LazyVideo
					desktop={media.video.desktop}
					mobile={media.video.mobile}
					className=""
				/>
			</div>
		)
	}

	return <ParallaxImage image={media.image} className={className} />
}
