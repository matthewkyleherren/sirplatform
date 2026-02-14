import type { ProductDetail } from '@/lib/data/product-detail'
import { ProductGallery } from './product-gallery'
import { ProductPurchasePanel } from './product-purchase-panel'
import s from './product-hero.module.css'

interface ProductHeroProps {
	product: ProductDetail
}

export function ProductHero({ product }: ProductHeroProps) {
	return (
		<section className={s.hero}>
			<div className={s.galleryColumn}>
				<ProductGallery images={product.gallery} productName={product.name} sizes={product.sizes} />
			</div>
			<div className={s.detailColumn}>
				<ProductPurchasePanel product={product} />
			</div>
		</section>
	)
}
