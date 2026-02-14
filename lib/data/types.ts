export interface ResponsiveImage {
	desktop: { src: string; width: number; height: number; alt: string }
	mobile: { src: string; width: number; height: number; alt: string }
}

export interface ResponsiveMedia {
	type: 'image' | 'video'
	image: ResponsiveImage
	video?: {
		desktop: { mp4: string; poster?: string }
		mobile: { mp4: string; poster?: string }
	}
}

export interface CTAButton {
	label: string
	href: string
	variant: 'primary' | 'secondary'
}

export interface QuickProduct {
	position: { x: string; y: string }
	image: string
	name: string
	href: string
}

export interface CTASingleSection {
	type: 'cta-single'
	media: ResponsiveMedia
	title: string
	kicker?: string
	description?: string
	buttons: CTAButton[]
	quickProducts?: QuickProduct[]
	floatingMenu?: {
		label: string
		links: Array<{ label: string; href: string }>
	}
}

export interface CTASplitSection {
	type: 'cta-split'
	left: {
		media: ResponsiveMedia
		title?: string
		button?: CTAButton
		menu?: { label: string; links: Array<{ label: string; href: string }> }
	}
	right: {
		media: ResponsiveMedia
		title?: string
		button?: CTAButton
		menu?: { label: string; links: Array<{ label: string; href: string }> }
	}
}

export interface Product {
	id: string
	name: string
	price: number
	compareAtPrice?: number
	currency: string
	images: {
		primary: string
		hover: string
	}
	colors: ProductColor[]
	tags: string[]
	href: string
}

export interface ProductColor {
	name: string
	hex: string
	href: string
}

export interface ProductCarouselSection {
	type: 'product-carousel'
	title: string
	viewAllLink: string
	products: Product[]
}

export interface TickerTextSection {
	type: 'ticker-text'
	text: string
	backgroundImage: ResponsiveImage
	button?: CTAButton
}

export interface TextRevealSection {
	type: 'text-reveal'
	caption?: string
	text: string
	backgroundImage?: ResponsiveImage
	overlayOpacity?: number
}

export interface TextImageRevealSection {
	type: 'text-image-reveal'
	blocks: Array<{
		text: string
		image: ResponsiveImage
	}>
}

export interface CTACarouselSlide {
	media: ResponsiveMedia
	kicker?: string
	title: string
	description?: string
	button: CTAButton
}

export interface CTACarouselSection {
	type: 'cta-carousel'
	kicker?: string
	slides: CTACarouselSlide[]
}

export interface EditorialSection {
	type: 'editorial'
	headline?: string
	subheading?: string
	body: string
}

export interface PageHeaderMarqueeSection {
	type: 'page-header-marquee'
	text: string
}

export interface NavigationItem {
	label: string
	href: string
	children?: NavigationItem[]
}

export interface NavigationGroup {
	label: string
	items: NavigationItem[]
	featured?: { image: string; title: string; href: string }
}

export interface SiteConfig {
	announcement: Array<{ text: string; link?: { label: string; href: string } }>
	socialLinks: Array<{ platform: string; href: string; label: string }>
	newsletter: { heading: string; description: string }
	usps: Array<{ text: string; href?: string }>
}

export type Section =
	| CTASingleSection
	| CTASplitSection
	| ProductCarouselSection
	| TickerTextSection
	| TextRevealSection
	| TextImageRevealSection
	| CTACarouselSection
	| EditorialSection
	| PageHeaderMarqueeSection
