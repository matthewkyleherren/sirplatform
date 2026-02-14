'use client'

import { Image } from '@/components/image'
import { Link } from '@/components/link'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './our-story-step-in.module.css'

export function OurStoryStepIn() {
	return (
		<section className={s.section}>
			<div className={s.media}>
				<Image
					src="/images/our-story/step-in-desktop.jpg"
					alt="Step in to our world"
					fill
					className={s.image}
					sizes="100vw"
				/>
			</div>
			<div className={s.overlay} />
			<div className={s.content}>
				<AnimateIn>
					<AnimateInWords
						text="Step in to our World"
						tag="h2"
						className={s.title}
					/>
					<AnimateInContent>
						<div className={s.buttons}>
							<Link href="#" className={s.buttonPrimary}>
								Shop All
							</Link>
							<Link href="#" className={s.buttonSecondary}>
								Explore
							</Link>
						</div>
					</AnimateInContent>
				</AnimateIn>
			</div>
		</section>
	)
}
