import type { Product } from '@/lib/data/types'

export const womenProducts: Product[] = [
	{
		id: 'w-john-cow-white',
		name: 'John Cow White',
		price: 258,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-w_cow-whi-primary.jpg',
			hover: '/images/products/int-s26john2-w_cow-whi-hover.jpg',
		},
		colors: [
			{ name: 'White', hex: '#FFFFFF', href: '#' },
			{ name: 'Cream', hex: '#F5F0E1', href: '#' },
		],
		tags: ['New'],
		href: '#',
	},
	{
		id: 'w-john-ed-white',
		name: 'John Ed White',
		price: 278,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-w_ed-whi-primary.jpg',
			hover: '/images/products/int-s26john2-w_ed-whi-hover.jpg',
		},
		colors: [
			{ name: 'White', hex: '#FFFFFF', href: '#' },
			{ name: 'Silver', hex: '#C0C0C0', href: '#' },
			{ name: 'Blush', hex: '#DE9FAD', href: '#' },
		],
		tags: ['Best Seller'],
		href: '#',
	},
	{
		id: 'w-john-plat-panna',
		name: 'John Platform Panna',
		price: 298,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john11-w_plat-panna-primary.jpg',
			hover: '/images/products/int-s26john11-w_plat-panna-hover.jpg',
		},
		colors: [
			{ name: 'Panna', hex: '#F2E8D4', href: '#' },
			{ name: 'White', hex: '#FFFFFF', href: '#' },
		],
		tags: ['New'],
		href: '#',
	},
	{
		id: 'w-john-block-terra',
		name: 'John Block Terra',
		price: 248,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-w_block-ter-primary.jpg',
			hover: '/images/products/int-s26john2-w_block-ter-primary.jpg',
		},
		colors: [
			{ name: 'Terra', hex: '#C4683E', href: '#' },
			{ name: 'Sand', hex: '#D2B48C', href: '#' },
			{ name: 'White', hex: '#FFFFFF', href: '#' },
		],
		tags: [],
		href: '#',
	},
]

export const menProducts: Product[] = [
	{
		id: 'm-john-block-cream',
		name: 'John Block Cream',
		price: 258,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-m_block-cre-primary.jpg',
			hover: '/images/products/int-s26john2-m_block-cre-hover.jpg',
		},
		colors: [
			{ name: 'Cream', hex: '#F5F0E1', href: '#' },
			{ name: 'White', hex: '#FFFFFF', href: '#' },
		],
		tags: ['New'],
		href: '#',
	},
	{
		id: 'm-john-vint-blue',
		name: 'John Vintage Blue',
		price: 268,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-m_vint-bul-primary.jpg',
			hover: '/images/products/int-s26john2-m_vint-bul-hover.jpg',
		},
		colors: [
			{ name: 'Blue', hex: '#4A6FA5', href: '#' },
			{ name: 'Navy', hex: '#1B2A4A', href: '#' },
			{ name: 'White', hex: '#FFFFFF', href: '#' },
		],
		tags: ['Best Seller'],
		href: '#',
	},
	{
		id: 'm-john-low-white',
		name: 'John Low White',
		price: 228,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-w_cow-whi-primary.jpg',
			hover: '/images/products/int-s26john2-w_cow-whi-hover.jpg',
		},
		colors: [
			{ name: 'White', hex: '#FFFFFF', href: '#' },
			{ name: 'Off White', hex: '#FAF9F6', href: '#' },
		],
		tags: [],
		href: '#',
	},
	{
		id: 'm-john-retro-cream',
		name: 'John Retro Cream',
		price: 278,
		currency: 'EUR',
		images: {
			primary: '/images/products/int-s26john2-m_block-cre-primary.jpg',
			hover: '/images/products/int-s26john2-m_block-cre-hover.jpg',
		},
		colors: [
			{ name: 'Cream', hex: '#F5F0E1', href: '#' },
			{ name: 'Sage', hex: '#9CAF88', href: '#' },
		],
		tags: ['New'],
		href: '#',
	},
]

export const allProducts: Product[] = [...womenProducts, ...menProducts]
