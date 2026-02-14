import type { PageHeaderMarqueeSection } from '@/lib/data/types'
import s from './page-header-marquee.module.css'

interface PageHeaderMarqueeProps {
	data: PageHeaderMarqueeSection
}

export function PageHeaderMarquee({ data }: PageHeaderMarqueeProps) {
	const { text } = data

	return (
		<section className={s.section}>
			<div className={s.track}>
				{/* First instance: uses h1 for SEO */}
				<h1 className={s.text}>{text}</h1>
				{/* Duplicate instances for seamless loop */}
				<span className={s.text} aria-hidden="true">
					{text}
				</span>
				<span className={s.text} aria-hidden="true">
					{text}
				</span>
			</div>
		</section>
	)
}
