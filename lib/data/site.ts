import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
	announcement: [
		{ text: 'Free shipping on all EU orders' },
		{ text: 'Shop New Arrivals', link: { label: 'Shop New Arrivals', href: '#' } },
	],
	usps: [
		{ text: 'Free Shipping on All Orders', href: '/pages/faq' },
		{ text: 'Free 14 Day Returns', href: '/pages/faq' },
		{ text: 'Committed to Making Environmental Changes', href: '/pages/environmental-promises' },
	],
	newsletter: {
		heading: 'Step in to our World',
		description:
			'Sign up today and get 15% off your first purchase and be the first to know about exclusive launches, news & offers',
	},
	socialLinks: [
		{ platform: 'Instagram', href: 'https://instagram.com/p448', label: 'Instagram' },
		{ platform: 'Facebook', href: 'https://facebook.com/p448', label: 'Facebook' },
		{ platform: 'TikTok', href: 'https://tiktok.com/@p448', label: 'TikTok' },
		{ platform: 'LinkedIn', href: 'https://linkedin.com/company/p448', label: 'LinkedIn' },
	],
}

export const copyright = '2026 | P448 s.r.l. | P.IVA 04339810402'
