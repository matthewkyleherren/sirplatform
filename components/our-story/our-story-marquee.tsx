import s from './our-story-marquee.module.css'

const MARQUEE_TEXT = 'You Can Surf Later'

export function OurStoryMarquee() {
	return (
		<section className={s.section}>
			<p className={s.kicker}>How It All Began</p>
			<div className={s.track} aria-label={MARQUEE_TEXT}>
				{Array.from({ length: 6 }).map((_, i) => (
					<span key={i} className={s.text} aria-hidden={i > 0 ? 'true' : undefined}>
						{MARQUEE_TEXT}
						<span className={s.separator} aria-hidden="true">{'—'}</span>
					</span>
				))}
			</div>
		</section>
	)
}
