"use client"

import { useState } from 'react'
import { Link } from '@/components/link'
import { Image } from '@/components/image'
import { headerNav, megaMenu } from '@/lib/data/navigation'
import s from './header.module.css'

export function HeaderNav() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const activeMenu = activeIndex !== null ? megaMenu[headerNav[activeIndex].menuKey] : null

	return (
		<div
			className={s.bannerNav}
			onMouseLeave={() => setActiveIndex(null)}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setActiveIndex(null)
				}
			}}
		>
			<nav aria-label="Primary">
				<ul className={s.bannerNavItems}>
					{headerNav.map((item, index) => (
						<li
							key={item.label}
							onMouseEnter={() => setActiveIndex(index)}
							onFocus={() => setActiveIndex(index)}
						>
							<Link href={item.href} className={s.navLink}>
								<span>{item.label}</span>
								<span className={s.navLinkCaret} aria-hidden="true">
									+
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className={`${s.megaPanel} ${activeMenu ? s.megaPanelVisible : ''}`}>
				{activeMenu && (
					<div className={s.megaPanelInner}>
						<div>
							<p className={s.megaHeading}>Highlights</p>
							<ul className={s.megaList}>
								{activeMenu.highlights.map((link) => (
									<li key={link.label}>
										<Link href={link.href} className={s.megaLink}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{activeMenu.promo && (
							<div className={s.megaPromo}>
								<Image
									src={activeMenu.promo.image}
									width={420}
									height={280}
									alt={activeMenu.promo.title}
									className={s.megaPromoImage}
									priority={activeIndex === 0}
								/>
								<div className={s.megaPromoCopy}>
									{activeMenu.promo.kicker && (
										<p className={s.megaPromoKicker}>{activeMenu.promo.kicker}</p>
									)}
									<p className={s.megaPromoTitle}>{activeMenu.promo.title}</p>
									<Link href={activeMenu.promo.href} className={s.megaPromoLink}>
										Shop Now
									</Link>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
