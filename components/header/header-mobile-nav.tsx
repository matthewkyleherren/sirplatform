'use client'

import { useState } from 'react'
import { Link } from '@/components/link'
import * as Dialog from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import s from './header.module.css'

const tabs = ['Women', 'Men', 'Explore'] as const

const tabLinks: Record<string, Array<{ label: string; href: string }>> = {
	Women: [
		{ label: 'New Arrivals', href: '#' },
		{ label: 'Sneakers', href: '#' },
		{ label: 'Best Sellers', href: '#' },
		{ label: 'Shop All', href: '#' },
	],
	Men: [
		{ label: 'New Arrivals', href: '#' },
		{ label: 'Sneakers', href: '#' },
		{ label: 'Best Sellers', href: '#' },
		{ label: 'Shop All', href: '#' },
	],
	Explore: [
		{ label: 'Our Story', href: '/our-story' },
		{ label: 'Visit Us', href: '#' },
	],
}

export function HeaderMobileNav() {
	const [activeTab, setActiveTab] = useState<string>('Women')

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className={s.hamburger} aria-label="Open menu">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
					</svg>
				</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className={s.mobileNavOverlay} />
				<Dialog.Content className={s.mobileNavContent} aria-describedby={undefined}>
					<Dialog.Title asChild>
						<VisuallyHidden.Root>Navigation menu</VisuallyHidden.Root>
					</Dialog.Title>

					<Dialog.Close asChild>
						<button className={s.mobileNavClose} aria-label="Close menu">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</button>
					</Dialog.Close>

					<div className={s.mobileNavTabs}>
						{tabs.map((tab) => (
							<button
								key={tab}
								className={`${s.mobileNavTab} ${activeTab === tab ? s.mobileNavTabActive : ''}`}
								onClick={() => setActiveTab(tab)}
							>
								{tab}
							</button>
						))}
					</div>

					<ul className={s.mobileNavLinks}>
						{tabLinks[activeTab]?.map((link) => (
							<li key={link.label}>
								<Dialog.Close asChild>
									<Link href={link.href} className={s.mobileNavLink}>
										{link.label}
									</Link>
								</Dialog.Close>
							</li>
						))}
					</ul>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
