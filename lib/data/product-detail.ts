import type { Product } from '@/lib/data/types'
import { womenProducts } from '@/lib/data/products'

export interface ProductGalleryImage {
	id: string
	src: string
	alt: string
	width: number
	height: number
}

export interface ProductTab {
	id: string
	label: string
	content: Array<{ type: 'paragraph' | 'list'; value: string | string[] }>
}

export interface ProductReview {
	id: string
	author: string
	location: string
	title: string
	body: string
	rating: number
	date: string
}

export interface ProductSize {
	eu: string
	us: string
}

export interface ProductDetail {
	handle: string
	kicker: string
	name: string
	price: number
	currency: string
	description: string
	colorway: string
	gallery: ProductGalleryImage[]
	highlights: string[]
	sizes: ProductSize[]
	fit: { label: string; description: string; value: number }
	materials: string[]
	careNotes: string[]
	shippingNotes: string[]
	taxMessage: string
	deliveryEstimate: string
	recommendations: Product[]
	tabs: ProductTab[]
	reviews: ProductReview[]
}

const euroFormatter = new Intl.NumberFormat('en-IE', {
	style: 'currency',
	currency: 'EUR',
})

export function formatPrice(amount: number, currency: string) {
	if (currency === 'EUR') {
		return euroFormatter.format(amount)
	}

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(amount)
}

export const johnLilacProduct: ProductDetail = {
	handle: 's25john2-w-258',
	kicker: 'SS25 Collection',
	name: 'John Lilac',
	price: 249,
	currency: 'EUR',
	description:
		'The John Lilac is wrapped in white leather with contrasting light pink and off-white suede details. Off-white cotton laces and our signature P448 amber rubber sole tie it all together.',
	colorway: 'White / Lilac / Off-white',
	gallery: [
		{
			id: 'look-1',
			src: '/images/product/john-lilac/look-1.jpg',
			alt: 'John Lilac sneaker profile view',
			width: 2100,
			height: 1400,
		},
		{
			id: 'look-2',
			src: '/images/product/john-lilac/look-2.jpg',
			alt: 'John Lilac sneaker angled view',
			width: 2100,
			height: 1400,
		},
		{
			id: 'look-3',
			src: '/images/product/john-lilac/look-3.jpg',
			alt: 'John Lilac sneaker close-up on tongue',
			width: 2100,
			height: 1400,
		},
		{
			id: 'look-4',
			src: '/images/product/john-lilac/look-4.jpg',
			alt: 'John Lilac sneaker overhead view',
			width: 2100,
			height: 1400,
		},
		{
			id: 'look-5',
			src: '/images/product/john-lilac/look-5.jpg',
			alt: 'John Lilac sneaker outsole detail',
			width: 2100,
			height: 1400,
		},
		{
			id: 'look-6',
			src: '/images/product/john-lilac/look-6.jpg',
			alt: 'John Lilac sneaker stacked pair',
			width: 2100,
			height: 1400,
		},
	],
	highlights: [
		'Made in Italy',
		'White leather upper with perforated P448 logo',
		'Light pink suede tongue & heel tab',
		'Off-white suede trim & toe',
		'Terry cloth lining with memory foam insole',
		'Amber P448 rubber sole & off-white cotton laces',
	],
	sizes: [
		{ eu: '35', us: 'W 5' },
		{ eu: '36', us: 'W 6' },
		{ eu: '37', us: 'W 6.5' },
		{ eu: '38', us: 'W 7.5' },
		{ eu: '39', us: 'W 8.5' },
		{ eu: '40', us: 'W 9.5' },
		{ eu: '41', us: 'W 10' },
		{ eu: '42', us: 'W 11' },
	],
	fit: {
		label: 'Fit',
		description: 'True to size',
		value: 50,
	},
	materials: [
		'Upper: leather & suede mix',
		'Lining: terry cloth',
		'Sole: 100% rubber',
		'Laces: cotton',
	],
	careNotes: [
		'Pre-treat leather with a protective spray to guard against stains.',
		'Spot clean leather with a lightly damp cotton cloth; let dry away from direct heat.',
		'Use a suede brush to gently buff the suede panels, always brushing with the nap.',
		'Remove dirt from soles with a damp cloth; use a white rubber eraser for stubborn marks.',
	],
	shippingNotes: [
		'Free ground shipping on all EU orders.',
		'Orders ship within 1 business day; tracking is emailed at dispatch.',
		'Returns accepted within 14 days via the online portal (a €5 processing fee applies).',
	],
	taxMessage: 'Tax & import duties included',
	deliveryEstimate: 'Feb 23 – Feb 25',
	recommendations: womenProducts.slice(0, 4),
	tabs: [
		{
			id: 'description',
			label: 'Description',
			content: [
				{
					type: 'paragraph',
					value:
						'Lux Italian leather, pastel lilac suede, and an amber rubber sole give the John Lilac its elevated everyday energy. Breathable terry cloth lining and a memory foam insole keep things plush no matter where you roam.',
				},
				{ type: 'list', value: ['Made in Italy', 'Removable memory foam insole', 'Signature amber outsole'] },
			],
		},
		{
			id: 'reviews',
			label: 'Reviews',
			content: [
				{
					type: 'paragraph',
					value:
						'4.8 ★ average · 124 reviews. “Obsessed with the subtle pop of color—these broke in instantly.” – Alessia R.',
				},
			],
		},
		{
			id: 'care',
			label: 'Care',
			content: [
				{
					type: 'paragraph',
					value:
						'Spot clean leather panels with a damp microfiber cloth and refresh suede using a suede brush. Avoid soaking the sneakers; instead let them air dry out of direct heat.',
				},
			],
		},
	],
	reviews: [
		{
			id: 'rev-1',
			author: 'Alessia R.',
			location: 'Milan, IT',
			title: 'Perfect pop of color',
			body: 'These broke in instantly and the lilac suede is such a subtle statement. I wore them straight out of the box on a city trip and they stayed comfy all day.',
			rating: 5,
			date: 'Feb 4, 2025',
		},
		{
			id: 'rev-2',
			author: 'Noelle P.',
			location: 'Paris, FR',
			title: 'Cloud-level comfort',
			body: 'Terry lining + memory foam equals a dream. They run true to size and the amber sole looks amazing with denims.',
			rating: 5,
			date: 'Jan 28, 2025',
		},
		{
			id: 'rev-3',
			author: 'Sophia L.',
			location: 'Lisbon, PT',
			title: 'Elevated neutral',
			body: 'Love how the lilac hits stay soft so they still behave like a neutral sneaker. Took off one star because I wish there was an extra set of laces.',
			rating: 4,
			date: 'Jan 10, 2025',
		},
	],
}

const productMap: Record<string, ProductDetail> = {
	[johnLilacProduct.handle]: johnLilacProduct,
}

export function getProductByHandle(handle: string) {
	const key = handle.toLowerCase()
	return productMap[key]
}
