import { siteConfig } from '@/lib/data/site'
import { ThemeSwitch } from './theme-switch'
import s from './header-ticker.module.css'

function TickerContent() {
	return (
		<>
			{siteConfig.announcement.map((item, i) => (
				<span key={i} className={s.item}>
					{i > 0 && <span className={s.separator} aria-hidden="true"> - </span>}
					{item.link ? (
						<a href={item.link.href} className={s.text} tabIndex={-1}>
							{item.text}
							<svg
								className={s.arrow}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 8 8"
								width="8"
								height="8"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M0 0h8v8H7V1.707L1.354 7.354 1 7.707.293 7l.353-.354L6.293 1H0V0Z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					) : (
						<span className={s.text}>{item.text}</span>
					)}
				</span>
			))}
		</>
	)
}

export function HeaderTicker() {
	return (
		<div className={s.bar}>
			<div className={s.ticker} role="marquee" aria-label="Announcements">
				<div className={s.track}>
					<div className={s.items}>
						<TickerContent />
					</div>
					<div className={s.items} aria-hidden="true">
						<TickerContent />
					</div>
					<div className={s.items} aria-hidden="true">
						<TickerContent />
					</div>
					<div className={s.items} aria-hidden="true">
						<TickerContent />
					</div>
				</div>
			</div>
			<ThemeSwitch />
		</div>
	)
}
