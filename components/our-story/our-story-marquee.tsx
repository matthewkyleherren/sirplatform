import s from './our-story-marquee.module.css'

const MARQUEE_TEXT = 'You Can Surf Later'

export function OurStoryMarquee() {
	return (
		<section className={s.section}>
			<div className={s.track} aria-label={MARQUEE_TEXT}>
				{Array.from({ length: 8 }).map((_, i) => (
					<span key={i} className={s.text} aria-hidden={i > 0 ? 'true' : undefined}>
						{MARQUEE_TEXT}
						<span className={s.separator} aria-hidden="true">{' \u2014 '}</span>
					</span>
				))}
			</div>
		</section>
	)
}
