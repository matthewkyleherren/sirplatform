import { notFound } from 'next/navigation'
import { ProductHero } from '@/components/product/product-hero'
import { ProductTabs } from '@/components/product/product-tabs'
import { ProductRecommendations } from '@/components/product/product-recommendations'
import { getProductByHandle } from '@/lib/data/product-detail'

interface ProductPageProps {
	params: Promise<{ handle: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
	const resolvedParams = await params
	const product = getProductByHandle(resolvedParams.handle)

	if (!product) {
		notFound()
	}

	return (
		<>
			<ProductHero product={product} />
			<ProductTabs tabs={product.tabs} reviews={product.reviews} />
			<ProductRecommendations products={product.recommendations} />
		</>
	)
}
