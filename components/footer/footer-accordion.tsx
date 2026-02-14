'use client'

import { Link } from '@/components/link'
import * as Accordion from '@radix-ui/react-accordion'
import s from './footer.module.css'

interface FooterAccordionGroup {
	label: string
	items: ReadonlyArray<{ label: string; href: string }>
}

interface FooterAccordionProps {
	groups: Record<string, FooterAccordionGroup>
}

function ChevronIcon() {
	return (
		<svg
			className={s.chevron}
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	)
}

export function FooterAccordion({ groups }: FooterAccordionProps) {
	return (
		<Accordion.Root type="multiple" className={s.accordion}>
			{Object.entries(groups).map(([key, group]) => (
				<Accordion.Item key={key} value={key} className={s.accordionItem}>
					<Accordion.Header asChild>
						<h3>
							<Accordion.Trigger className={s.accordionTrigger}>
								{group.label}
								<ChevronIcon />
							</Accordion.Trigger>
						</h3>
					</Accordion.Header>
					<Accordion.Content className={s.accordionContent}>
						<ul className={s.footerLinks}>
							{group.items.map((item) => (
								<li key={item.label}>
									<Link href={item.href} className={s.footerLink}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</Accordion.Content>
				</Accordion.Item>
			))}
		</Accordion.Root>
	)
}
