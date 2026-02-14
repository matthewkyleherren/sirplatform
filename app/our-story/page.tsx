import { OurStoryHero } from '@/components/our-story/our-story-hero'
import { OurStoryMarquee } from '@/components/our-story/our-story-marquee'
import { OurStoryEditorialGrid } from '@/components/our-story/our-story-editorial-grid'
import { OurStoryTextBlock } from '@/components/our-story/our-story-text-block'
import { OurStoryResponsibility } from '@/components/our-story/our-story-responsibility'
import { OurStoryMaterialTicker } from '@/components/our-story/our-story-material-ticker'
import { OurStoryPillars } from '@/components/our-story/our-story-pillars'
import { FloatingNav } from '@/components/sections/floating-nav/floating-nav'

export const metadata = {
	title: 'Our Story — P448',
	description: 'P448 blends timeless design, thoughtful details and modern influence to create more than just footwear.',
}

export default function OurStoryPage() {
	return (
		<>
			<OurStoryHero />
			<OurStoryMarquee />
			<OurStoryEditorialGrid />
			<OurStoryTextBlock />
			<OurStoryResponsibility />
			<OurStoryMaterialTicker />
			<OurStoryPillars />
			<FloatingNav label="Shop Now" href="#" />
		</>
	)
}
