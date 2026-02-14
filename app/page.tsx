import { homepageSections } from '@/lib/data/homepage'
import { CTASingle } from '@/components/sections/cta-single/cta-single'
import { CTASplit } from '@/components/sections/cta-split/cta-split'
import { ProductCarousel } from '@/components/sections/product-carousel/product-carousel'
import { TickerText } from '@/components/sections/ticker-text/ticker-text'
import { TextImageReveal } from '@/components/sections/text-image-reveal/text-image-reveal'
import { NewsFeed } from '@/components/feed/news-feed'

export default function HomePage() {
	return (
		<>
			<NewsFeed />
			{homepageSections.map((section, index) => {
				switch (section.type) {
					case 'cta-single':
						return <CTASingle key={index} data={section} priority={index === 0} />
					case 'cta-split':
						return <CTASplit key={index} data={section} />
					case 'product-carousel':
						return <ProductCarousel key={index} data={section} />
					case 'ticker-text':
						return <TickerText key={index} data={section} />
					case 'text-image-reveal':
						return <TextImageReveal key={index} data={section} />
					default:
						return null
				}
			})}
		</>
	)
}
