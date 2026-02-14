'use client'

import type { TextImageRevealSection } from '@/lib/data/types'
import { Image } from '@/components/image'
import { useTextImageReveal } from '@/lib/hooks/use-text-image-reveal'
import s from './text-image-reveal.module.css'

interface TextImageRevealProps {
	data: TextImageRevealSection
}

export function TextImageReveal({ data }: TextImageRevealProps) {
	const { blocks } = data
	const { containerRef, registerWord, activeIndex } = useTextImageReveal<HTMLElement>()

	// Build all words with their block index
	let globalWordIndex = 0
	const wordBlocks = blocks.map((block, blockIndex) => {
		const words = block.text.split(/\s+/).filter(Boolean)
		const entries = words.map((word) => {
			const idx = globalWordIndex
			globalWordIndex++
			return { word, globalIndex: idx, blockIndex }
		})
		return { ...block, words: entries }
	})

	return (
		<section ref={containerRef} className={s.section}>
			<div className={s.grid}>
				{/* Left column: text */}
				<div className={s.textColumn}>
					<p className={s.text}>
						{wordBlocks.map((block) =>
							block.words.map((entry) => (
								<span
									key={entry.globalIndex}
									ref={registerWord(entry.globalIndex, String(entry.blockIndex))}
									className={s.word}
									data-index={entry.blockIndex}
								>
									{entry.word}{' '}
								</span>
							)),
						)}
					</p>
				</div>

				{/* Right column: images */}
				<div className={s.imageColumn}>
					{blocks.map((block, blockIndex) => (
						<div
							key={blockIndex}
							className={`${s.imageWrapper} ${activeIndex === String(blockIndex) ? s.imageActive : ''}`}
						>
							{/* Desktop image */}
							<Image
								src={block.image.desktop.src}
								width={block.image.desktop.width}
								height={block.image.desktop.height}
								alt={block.image.desktop.alt}
								className={`${s.image} hidden md:block`}
								sizes="50vw"
							/>
							{/* Mobile image */}
							<Image
								src={block.image.mobile.src}
								width={block.image.mobile.width}
								height={block.image.mobile.height}
								alt={block.image.mobile.alt}
								className={`${s.image} block md:hidden`}
								sizes="100vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
