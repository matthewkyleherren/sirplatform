import type { ProductReview } from '@/lib/data/product-detail'
import s from './product-reviews.module.css'

interface ProductReviewsProps {
	reviews: ProductReview[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
	const average =
		reviews.reduce((sum, review) => sum + review.rating, 0) / (reviews.length || 1)

	return (
		<div>
			<div className={s.summary}>
				<p className={s.score}>{average.toFixed(1)}</p>
				<div>
					<div className={s.stars}>{'★★★★★'.slice(0, 5)}</div>
					<p className={s.meta}>{reviews.length} verified reviews</p>
				</div>
			</div>
			<div className={s.cards}>
				{reviews.map((review) => (
					<article key={review.id} className={s.card}>
						<div className={s.stars}>{'★★★★★'.slice(0, review.rating)}</div>
						<h4 className={s.cardTitle}>{review.title}</h4>
						<p className={s.cardBody}>{review.body}</p>
						<p className={s.cardMeta}>
							{review.author} · {review.location} · {review.date}
						</p>
					</article>
				))}
			</div>
		</div>
	)
}
