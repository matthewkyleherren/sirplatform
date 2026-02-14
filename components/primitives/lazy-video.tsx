'use client'

import { useLazyVideo } from '@/lib/hooks/use-lazy-video'

interface LazyVideoProps {
	desktop: { mp4: string; poster?: string }
	mobile: { mp4: string; poster?: string }
	className?: string
}

export function LazyVideo({ desktop, mobile, className }: LazyVideoProps) {
	const { videoRef: desktopRef } = useLazyVideo()
	const { videoRef: mobileRef } = useLazyVideo()

	return (
		<div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
			{/* Desktop video: hidden below md */}
			<video
				ref={desktopRef}
				autoPlay
				loop
				muted
				playsInline
				data-poster={desktop.poster}
				className="hidden md:block"
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					inset: 0,
				}}
			>
				<source data-src={desktop.mp4} type="video/mp4" />
			</video>
			{/* Mobile video: visible below md */}
			<video
				ref={mobileRef}
				autoPlay
				loop
				muted
				playsInline
				data-poster={mobile.poster}
				className="block md:hidden"
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					position: 'absolute',
					inset: 0,
				}}
			>
				<source data-src={mobile.mp4} type="video/mp4" />
			</video>
		</div>
	)
}
