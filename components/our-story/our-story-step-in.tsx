import NextImage from 'next/image'
import s from './our-story-step-in.module.css'

export function OurStoryStepIn() {
	return (
		<section className={s.section}>
			<div className={s.media}>
				<NextImage
					src="/images/our-story/step-in-desktop.jpg"
					alt="Step in to our world"
					fill
					className={s.image}
					sizes="100vw"
				/>
			</div>
			<div className={s.overlay} />
			<div className={s.content}>
				<h2 className={s.title}>Step in to our<br />World</h2>
				<div className={s.buttons}>
					<a href="#" className={s.btnPrimary}>Shop All</a>
					<a href="#" className={s.btnSecondary}>Explore</a>
				</div>
			</div>
		</section>
	)
}
