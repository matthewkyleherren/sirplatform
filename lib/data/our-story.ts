import type {
	CTACarouselSection,
	CTASingleSection,
	CTASplitSection,
	EditorialSection,
	PageHeaderMarqueeSection,
	Section,
	TextRevealSection,
} from '@/lib/data/types'

export const headerMarquee: PageHeaderMarqueeSection = {
	type: 'page-header-marquee',
	text: 'Our Story',
}

export const heroSection: CTASingleSection = {
	type: 'cta-single',
	media: {
		type: 'video',
		image: {
			desktop: {
				src: '/images/our-story/hero-desktop.jpg',
				width: 4200,
				height: 2100,
				alt: 'P448 Our Story hero',
			},
			mobile: {
				src: '/images/our-story/hero-mobile.jpg',
				width: 1000,
				height: 1200,
				alt: 'P448 Our Story hero',
			},
		},
		video: {
			desktop: { mp4: '/videos/our-story/hero-desktop.mp4' },
			mobile: { mp4: '/videos/our-story/hero-mobile.mp4' },
		},
	},
	title: 'Born In Italy, Made For The World',
	buttons: [{ label: 'Discover Collection', href: '#', variant: 'primary' }],
}

export const introReveal: TextRevealSection = {
	type: 'text-reveal',
	text: 'We are P448. Born in 2014 from the streets of Italy, we craft luxury sneakers for those who refuse to blend in. Every pair tells a story of rebellion, craftsmanship, and unapologetic style.',
}

export const handcraftedSplit: CTASplitSection = {
	type: 'cta-split',
	left: {
		media: {
			type: 'image',
			image: {
				desktop: {
					src: '/images/our-story/split-left-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'Handcrafted in Italy',
				},
				mobile: {
					src: '/images/our-story/split-left-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'Handcrafted in Italy',
				},
			},
		},
		title: 'Handcrafted In Italy',
		button: { label: 'Shop Now', href: '#', variant: 'primary' },
	},
	right: {
		media: {
			type: 'image',
			image: {
				desktop: {
					src: '/images/our-story/split-right-desktop.jpg',
					width: 2100,
					height: 1400,
					alt: 'Since 2014',
				},
				mobile: {
					src: '/images/our-story/split-right-mobile.jpg',
					width: 1000,
					height: 800,
					alt: 'Since 2014',
				},
			},
		},
		title: 'Since 2014',
		button: { label: 'Shop Now', href: '#', variant: 'primary' },
	},
}

export const philosophyEditorial: EditorialSection = {
	type: 'editorial',
	headline: 'Our Philosophy',
	body: '<p>At P448, we believe luxury should be lived in, not locked away. Our sneakers are designed to be worn — on sun-drenched cobblestone streets, in smoky jazz clubs, at gallery openings. Wherever you go, however you move.</p><p>We take the finest Italian leather and suede, pair them with hand-finished details, and create something that\'s equal parts art and utility. No compromises.</p>',
}

export const collectionsCarousel: CTACarouselSection = {
	type: 'cta-carousel',
	kicker: 'Collections',
	slides: [
		{
			media: {
				type: 'image',
				image: {
					desktop: {
						src: '/images/our-story/carousel-fw25-desktop.jpg',
						width: 4200,
						height: 2100,
						alt: 'FW25 Collection',
					},
					mobile: {
						src: '/images/our-story/carousel-fw25-mobile.jpg',
						width: 1000,
						height: 1200,
						alt: 'FW25 Collection',
					},
				},
			},
			title: 'FW25 Collection',
			kicker: 'New Season',
			description: 'Bold silhouettes for the season ahead',
			button: { label: 'Shop FW25', href: '#', variant: 'primary' },
		},
		{
			media: {
				type: 'image',
				image: {
					desktop: {
						src: '/images/our-story/carousel-python-desktop.jpg',
						width: 4200,
						height: 2100,
						alt: 'Python Collection',
					},
					mobile: {
						src: '/images/our-story/carousel-python-mobile.jpg',
						width: 1000,
						height: 1200,
						alt: 'Python Collection',
					},
				},
			},
			title: 'Python Collection',
			kicker: 'Limited Edition',
			description: 'Exotic textures, Italian craftsmanship',
			button: { label: 'Discover', href: '#', variant: 'primary' },
		},
		{
			media: {
				type: 'image',
				image: {
					desktop: {
						src: '/images/our-story/carousel-katz-desktop.jpg',
						width: 4200,
						height: 2100,
						alt: 'Katz Collaboration',
					},
					mobile: {
						src: '/images/our-story/carousel-katz-mobile.jpg',
						width: 1000,
						height: 1200,
						alt: 'Katz Collaboration',
					},
				},
			},
			title: 'Katz Collaboration',
			kicker: 'Special Edition',
			description: 'Art meets street culture',
			button: { label: 'Explore', href: '#', variant: 'primary' },
		},
	],
}

export const craftsmanshipReveal: TextRevealSection = {
	type: 'text-reveal',
	text: "Every stitch, every detail, every material — chosen with intention. We don't follow trends. We set them.",
	backgroundImage: {
		desktop: {
			src: '/images/our-story/craftsmanship-desktop.jpg',
			width: 2100,
			height: 1400,
			alt: 'Craftsmanship',
		},
		mobile: {
			src: '/images/our-story/craftsmanship-mobile.jpg',
			width: 1000,
			height: 800,
			alt: 'Craftsmanship',
		},
	},
	overlayOpacity: 0.5,
	caption: 'Craftsmanship',
}

export const materialsEditorial: EditorialSection = {
	type: 'editorial',
	headline: 'Materials & Innovation',
	body: "<p>We source only the finest materials from tanneries across Italy and Europe. Premium leather, hand-washed suede, recycled fabrics — each chosen for quality, character, and sustainability.</p><p>Our artisans in Marche combine traditional techniques with modern innovation, creating sneakers that age beautifully and feel incredible from day one.</p>",
}

export const sustainabilityReveal: TextRevealSection = {
	type: 'text-reveal',
	text: "Sustainability isn't a trend for us. It's a responsibility. From recycled materials to ethical production, we're committed to doing better.",
	backgroundImage: {
		desktop: {
			src: '/images/our-story/sustainability-desktop.jpg',
			width: 2100,
			height: 1400,
			alt: 'Sustainability',
		},
		mobile: {
			src: '/images/our-story/sustainability-mobile.jpg',
			width: 1000,
			height: 800,
			alt: 'Sustainability',
		},
	},
	overlayOpacity: 0.45,
	caption: 'Sustainability',
}

export const ourStorySections: Section[] = [
	headerMarquee,
	heroSection,
	introReveal,
	handcraftedSplit,
	philosophyEditorial,
	collectionsCarousel,
	craftsmanshipReveal,
	materialsEditorial,
	sustainabilityReveal,
]
