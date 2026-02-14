import type {
	CTASingleSection,
	CTASplitSection,
	ProductCarouselSection,
	TickerTextSection,
	TextImageRevealSection,
	Section,
} from '@/lib/data/types'
import { womenProducts, menProducts } from './products'

export const heroSection: CTASingleSection = {
	type: 'cta-single',
	media: {
		type: 'image',
		image: {
			desktop: {
				src: '/images/hero/hero-desktop.jpg',
				width: 4200,
				height: 2100,
				alt: 'P448 SS26 Collection — You Can Surf Later',
			},
			mobile: {
				src: '/images/hero/hero-mobile.jpg',
				width: 1000,
				height: 1200,
				alt: 'P448 SS26 Collection — You Can Surf Later',
			},
		},
	},
	title: 'Spring Is Here',
	kicker: 'SS26 Collection',
	description: 'New arrivals stitched with quality craftsmanship, premium materials and fresh style perspectives.',
	buttons: [
		{ label: "Shop women's", href: '/collections/women-new-arrivals', variant: 'primary' },
		{ label: "Shop men's", href: '/collections/men-new-arrivals', variant: 'secondary' },
	],
	floatingMenu: {
		label: 'In this drop',
		links: [
			{ label: 'About us', href: '/our-story' },
			{ label: 'P448 World', href: '/pages/our-story' },
			{ label: 'Project Sustainability®', href: '/pages/project-sustainability' },
		],
	},
}

export const womenCarouselSection: ProductCarouselSection = {
	type: 'product-carousel',
	title: 'New Arrivals',
	viewAllLink: '/collections/women-new-arrivals',
	products: womenProducts,
}

export const ctaSplitSection: CTASplitSection = {
	type: 'cta-split',
	left: {
		media: {
			type: 'image',
			image: {
				desktop: {
					src: '/images/cta/women-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'Shop Women',
				},
				mobile: {
					src: '/images/cta/women-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'Shop Women',
				},
			},
		},
		title: "Women's",
		button: { label: "Shop women's", href: '/collections/women', variant: 'primary' },
		menu: {
			label: 'Highlights',
			links: [
				{ label: 'New Arrivals', href: '/collections/women-new-arrivals' },
				{ label: 'Best Sellers', href: '/collections/women-best-sellers' },
				{ label: 'Stella Ballet', href: '/collections/women-stella' },
			],
		},
	},
	right: {
		media: {
			type: 'image',
			image: {
				desktop: {
					src: '/images/cta/men-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'Shop Men',
				},
				mobile: {
					src: '/images/cta/men-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'Shop Men',
				},
			},
		},
		title: "Men's",
		button: { label: "Shop men's", href: '/collections/men', variant: 'primary' },
		menu: {
			label: 'Highlights',
			links: [
				{ label: 'New Arrivals', href: '/collections/men-new-arrivals' },
				{ label: 'Best Sellers', href: '/collections/men-best-sellers' },
				{ label: 'Essentials Edit', href: '/collections/men-the-essentials-edit' },
			],
		},
	},
}

export const menCarouselSection: ProductCarouselSection = {
	type: 'product-carousel',
	title: 'New Arrivals',
	viewAllLink: '/collections/men-new-arrivals',
	products: menProducts,
}

export const antibesSection: CTASingleSection = {
	type: 'cta-single',
	media: {
		type: 'image',
		image: {
			desktop: {
				src: '/images/cta/antibes-desktop.jpg',
				width: 4200,
				height: 2100,
				alt: 'The Antibes — iconic slip-on reimagined for summer',
			},
			mobile: {
				src: '/images/cta/antibes-mobile.jpg',
				width: 1000,
				height: 1200,
				alt: 'The Antibes — iconic slip-on reimagined for summer',
			},
		},
	},
	title: 'The Antibes',
	description: 'Our iconic slip-on, reimagined for summer',
	buttons: [{ label: 'Discover', href: '#', variant: 'primary' }],
}

export const tickerSection: TickerTextSection = {
	type: 'ticker-text',
	text: 'You Can Surf Later.',
	backgroundImage: {
		desktop: {
			src: '/images/ticker/surf-later-desktop.jpg',
			width: 4200,
			height: 1400,
			alt: 'You Can Surf Later',
		},
		mobile: {
			src: '/images/ticker/surf-later-mobile.jpg',
			width: 1000,
			height: 800,
			alt: 'You Can Surf Later',
		},
	},
	button: { label: 'Shop Now', href: '#', variant: 'primary' },
}

export const textImageRevealSection: TextImageRevealSection = {
	type: 'text-image-reveal',
	blocks: [
		{
			text: 'Born in 2014, P448 emerged from Italy\u2019s rich shoemaking tradition \u2014 but with an irreverent twist. We craft luxury sneakers for those who dare to stand out.',
			image: {
				desktop: {
					src: '/images/text-reveal/pair-1-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'P448 Italian craftsmanship',
				},
				mobile: {
					src: '/images/text-reveal/pair-1-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'P448 Italian craftsmanship',
				},
			},
		},
		{
			text: 'Every pair is handcrafted in our Italian atelier, blending premium materials with bold design. Because life\u2019s too short for boring shoes.',
			image: {
				desktop: {
					src: '/images/text-reveal/pair-2-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'P448 handcrafted sneakers',
				},
				mobile: {
					src: '/images/text-reveal/pair-2-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'P448 handcrafted sneakers',
				},
			},
		},
	],
}

export const homepageSections: Section[] = [
	heroSection,
	womenCarouselSection,
	ctaSplitSection,
	menCarouselSection,
	antibesSection,
	tickerSection,
	textImageRevealSection,
]
