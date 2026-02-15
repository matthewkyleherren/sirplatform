import NextImage from 'next/image'
import s from './our-story-responsibility.module.css'

const items = [
	{
		title: 'Commitment',
		body: 'P448 is a forward-thinking brand dedicated to designing and making products that contribute to a cleaner, greener and more inclusive world. We are committed to using the finest craftsmanship, ecologically friendly materials and sustainable processes.',
	},
	{
		title: 'Collections',
		body: 'Season after season, we continue to expand our Invasive Species and Recycled Materials collections to create regenerative and repurposed leather, suede, cotton and other fibers to help reduce our planetary impact.',
	},
	{
		title: 'Packaging & Tracing',
		body: 'Excess packaging is a thing of the past. You can expect P448 orders to be packed in our patented reusable dustbag that ships to you in a 100% recycled box, without packing slips or single-use paper materials.',
	},
	{
		title: 'Corporate Initiatives',
		body: "Sustainable practices don't just start and end with our products, we implement them in our day-to-day HQ responsibilities.",
	},
]

export function OurStoryResponsibility() {
	return (
		<section className={s.section}>
			<h2 className={s.heading}>Responsibility</h2>

			<div className={s.rows}>
				{items.map((item) => (
					<div key={item.title} className={s.row}>
						<h3 className={s.rowTitle}>{item.title}</h3>
						<p className={s.rowBody}>{item.body}</p>
					</div>
				))}
			</div>

			{/* Project Sustainability CTA */}
			<div className={s.cta}>
				<div className={s.ctaMedia}>
					<NextImage
						src="/images/our-story/sustainability-desktop.jpg"
						alt="Project Sustainability"
						fill
						className={s.ctaImage}
						sizes="100vw"
					/>
				</div>
				<div className={s.ctaOverlay} />
				<div className={s.ctaContent}>
					<h2 className={s.ctaTitle}>
						Project<br />Sustainability
					</h2>
					<div className={s.ctaButtons}>
						<a href="#" className={s.btnPrimary}>Shop now</a>
						<a href="#" className={s.btnSecondary}>Discover more</a>
					</div>
				</div>
			</div>
		</section>
	)
}
