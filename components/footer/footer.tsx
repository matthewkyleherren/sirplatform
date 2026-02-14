import { Link } from '@/components/link'
import { footerNav, socialLinks } from '@/lib/data/navigation'
import { siteConfig, copyright } from '@/lib/data/site'
import { FooterAccordion } from './footer-accordion'
import { FooterNewsletter } from './footer-newsletter'
import s from './footer.module.css'

export function Footer() {
	return (
		<footer className={s.footer}>
			{/* Background */}
			<div className={s.background}>
				<div className={s.backgroundOverlay} />
				{/* Placeholder dark bg — swap with an actual image when available */}
				<div className={s.backgroundImage} style={{ background: '#111' }} />
			</div>

			<div className={s.content}>
				{/* Newsletter */}
				<FooterNewsletter
					heading={siteConfig.newsletter.heading}
					description={siteConfig.newsletter.description}
				/>

				{/* USP Bar */}
				<div className={s.uspBar}>
					{siteConfig.usps.map((usp) => (
						<span key={usp.text} className={s.uspItem}>
							{usp.text}
						</span>
					))}
				</div>

				{/* Navigation — Desktop: grid columns, Mobile: accordion */}
				<div className={s.navGrid}>
					{Object.entries(footerNav).map(([key, group]) => (
						<div key={key} className={s.navColumn}>
							<h3>{group.label}</h3>
							<ul className={s.footerLinks}>
								{group.items.map((item) => (
									<li key={item.label}>
										<Link href={item.href} className={s.footerLink}>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<FooterAccordion groups={footerNav} />

				{/* Bottom bar */}
				<div className={s.bottomBar}>
					<span className={s.copyright}>{copyright}</span>
					<div className={s.socialIcons}>
						{socialLinks.map((link) => (
							<a
								key={link.platform}
								href={link.href}
								className={s.socialLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.label}
							>
								{link.platform}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
