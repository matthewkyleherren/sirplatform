import NextImage from 'next/image'
import s from './our-story-material-ticker.module.css'

const TICKER_TEXT = 'Material Innovation'

export function OurStoryMaterialTicker() {
	return (
		<section className={s.section}>
			{/* Ticker over image */}
			<div className={s.tickerBlock}>
				<div className={s.tickerMedia}>
					<NextImage
						src="/images/our-story/materials-desktop.jpg"
						alt="Material innovation"
						fill
						className={s.tickerImage}
						sizes="100vw"
					/>
				</div>
				<div className={s.tickerRows}>
					{[0, 1, 2].map((row) => (
						<div key={row} className={`${s.track} ${row % 2 === 1 ? s.trackReverse : ''}`}>
							{Array.from({ length: 8 }).map((_, i) => (
								<span key={i} className={s.tickerText} aria-hidden={i > 0 || row > 0 ? 'true' : undefined}>
									{TICKER_TEXT}
									<span className={s.sep}>{' \u2014 '}</span>
								</span>
							))}
						</div>
					))}
				</div>
			</div>

			{/* UN Global Compact content */}
			<div className={s.contentGrid}>
				<div className={s.contentText}>
					<p className={s.body}>
						Since 2024, P448 has been committed to the UN Global
						Compact corporate responsibility initiative and its
						principles in the areas of human rights, labor,
						environment and anti-corruption.
					</p>
				</div>
				<div className={s.contentMedia}>
					<NextImage
						src="/images/our-story/craftsmanship-desktop.jpg"
						alt="P448 craftsmanship details"
						fill
						className={s.contentImage}
						sizes="(max-width: 767px) 100vw, 45vw"
					/>
				</div>
			</div>
		</section>
	)
}
