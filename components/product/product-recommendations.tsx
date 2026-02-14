import type { Product } from '@/lib/data/types'
import { ProductCarousel } from '@/components/sections/product-carousel/product-carousel'
import type { ProductCarouselSection } from '@/lib/data/types'

interface ProductRecommendationsProps {
	products: Product[]
}

export function ProductRecommendations({ products }: ProductRecommendationsProps) {
	const section: ProductCarouselSection = {
		type: 'product-carousel',
		title: 'Recommended for you',
		viewAllLink: '/collections/new-arrivals',
		products,
	}

	return <ProductCarousel data={section} />
}
