import { OurStoryHero } from '@/components/our-story/our-story-hero'
import { OurStoryMarquee } from '@/components/our-story/our-story-marquee'
import { OurStoryEditorialGrid } from '@/components/our-story/our-story-editorial-grid'
import { OurStoryResponsibility } from '@/components/our-story/our-story-responsibility'
import { OurStoryMaterialTicker } from '@/components/our-story/our-story-material-ticker'
import { OurStoryPillars } from '@/components/our-story/our-story-pillars'
import { OurStoryStepIn } from '@/components/our-story/our-story-step-in'

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
			<OurStoryResponsibility />
			<OurStoryMaterialTicker />
			<OurStoryPillars />
			<OurStoryStepIn />
		</>
	)
}
