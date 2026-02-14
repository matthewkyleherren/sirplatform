import type { NavigationItem } from './types'

export interface MegaMenuContent {
	highlights: NavigationItem[]
	promo?: {
		image: string
		kicker?: string
		title: string
		href: string
	}
}

export const megaMenu: Record<string, MegaMenuContent> = {
	men: {
		highlights: [
			{ label: 'Shop All', href: '/collections/men' },
			{ label: 'New Arrivals', href: '/collections/men-new-arrivals' },
			{ label: 'Best Sellers', href: '/collections/men-best-sellers' },
			{ label: 'Spring/Summer 26', href: '/collections/ss26-men' },
			{ label: 'Fall/Winter 25', href: '/collections/fw25-men' },
			{ label: 'Laces', href: '/collections/laces' },
		],
		promo: {
			image: '/images/nav/nav-essentials-men.jpg',
			kicker: 'New Year Essentials',
			title: 'Shop Now',
			href: '/collections/men-the-essentials-edit',
		},
	},
	women: {
		highlights: [
			{ label: 'Shop All', href: '/collections/women' },
			{ label: 'New Arrivals', href: '/collections/women-new-arrivals' },
			{ label: 'Best Sellers', href: '/collections/women-best-sellers' },
			{ label: 'Spring/Summer 26', href: '/collections/ss26-women' },
			{ label: 'Fall/Winter 25', href: '/collections/fw25-women' },
			{ label: 'Laces', href: '/collections/laces' },
		],
		promo: {
			image: '/images/nav/nav-aspen.jpg',
			kicker: "It's Cold",
			title: 'Shop Warm Pairs',
			href: '/collections/women-aspen',
		},
	},
	explore: {
		highlights: [
			{ label: 'Model Guide', href: '/pages/model-index' },
			{ label: 'Gift Cards', href: '/products/gift-card' },
			{ label: 'Project Sustainability®', href: '/pages/project-sustainability' },
			{ label: 'P448 World', href: '/pages/our-story' },
		],
		promo: {
			image: '/images/nav/nav-p448-world.jpg',
			title: 'P448 World',
			href: '/pages/our-story',
		},
	},
}

export const headerNav: Array<NavigationItem & { menuKey: keyof typeof megaMenu }> = [
	{ label: 'Women', href: '/collections/women', menuKey: 'women' },
	{ label: 'Men', href: '/collections/men', menuKey: 'men' },
	{ label: 'Explore', href: '/our-story', menuKey: 'explore' },
]

export const headerSecondaryNav: NavigationItem[] = [
	{ label: 'Get Outside', href: '#' },
	{ label: 'Sale', href: '#' },
]

export const footerNav = {
	about: {
		label: 'About',
		items: [
			{ label: 'About', href: '/our-story' },
			{ label: 'Visit Us', href: '#' },
			{ label: 'Environmental Promises', href: '#' },
		],
	},
	customerService: {
		label: 'Customer Service',
		items: [
			{ label: 'FAQs', href: '#' },
			{ label: 'Contact', href: '#' },
			{ label: 'Shipping', href: '#' },
			{ label: 'Returns & Exchanges', href: '#' },
			{ label: 'Size Charts', href: '#' },
		],
	},
	legal: {
		label: 'Legal',
		items: [
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Cookie Policy', href: '#' },
			{ label: 'Terms & Conditions', href: '#' },
		],
	},
} as const

export const socialLinks = [
	{ platform: 'Instagram', href: 'https://instagram.com/p448', label: 'Instagram' },
	{ platform: 'Facebook', href: 'https://facebook.com/p448', label: 'Facebook' },
	{ platform: 'TikTok', href: 'https://tiktok.com/@p448', label: 'TikTok' },
	{ platform: 'LinkedIn', href: 'https://linkedin.com/company/p448', label: 'LinkedIn' },
]
