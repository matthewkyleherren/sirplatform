'use client'

import s from './footer.module.css'

interface FooterNewsletterProps {
	heading: string
	description: string
}

export function FooterNewsletter({ heading, description }: FooterNewsletterProps) {
	return (
		<section className={s.newsletter}>
			<h2 className={s.newsletterHeading}>{heading}</h2>
			<p className={s.newsletterDescription}>{description}</p>
			<form
				className={s.newsletterForm}
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<input
					type="email"
					className={s.newsletterInput}
					placeholder="Enter your email"
					aria-label="Email address for newsletter"
					required
				/>
				<button type="submit" className={s.newsletterSubmit}>
					Subscribe
				</button>
			</form>
		</section>
	)
}
