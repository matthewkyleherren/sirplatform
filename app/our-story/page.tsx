import { ourStorySections } from '@/lib/data/our-story'
import { CTASingle } from '@/components/sections/cta-single/cta-single'
import { CTASplit } from '@/components/sections/cta-split/cta-split'
import { CTACarousel } from '@/components/sections/cta-carousel/cta-carousel'
import { TextReveal } from '@/components/sections/text-reveal/text-reveal'
import { EditorialContent } from '@/components/sections/editorial-content/editorial-content'
import { PageHeaderMarquee } from '@/components/sections/page-header-marquee/page-header-marquee'
import { FloatingNav } from '@/components/sections/floating-nav/floating-nav'

export default function OurStoryPage() {
	return (
		<>
			{ourStorySections.map((section, index) => {
				switch (section.type) {
					case 'page-header-marquee':
						return <PageHeaderMarquee key={index} data={section} />
					case 'cta-single':
						return <CTASingle key={index} data={section} />
					case 'text-reveal':
						return <TextReveal key={index} data={section} />
					case 'cta-split':
						return <CTASplit key={index} data={section} />
					case 'editorial':
						return <EditorialContent key={index} data={section} />
					case 'cta-carousel':
						return <CTACarousel key={index} data={section} />
					default:
						return null
				}
			})}
			<FloatingNav label="Shop Now" href="#" />
		</>
	)
}
