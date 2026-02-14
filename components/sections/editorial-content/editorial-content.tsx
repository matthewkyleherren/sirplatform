'use client'

import type { EditorialSection } from '@/lib/data/types'
import {
	AnimateIn,
	AnimateInWords,
	AnimateInContent,
} from '@/components/primitives/animate-in'
import s from './editorial-content.module.css'

interface EditorialContentProps {
	data: EditorialSection
}

export function EditorialContent({ data }: EditorialContentProps) {
	const { headline, subheading, body } = data

	return (
		<section className={s.section}>
			<div className={s.grid}>
				{/* Left column: headline */}
				<div className={s.headlineColumn}>
					<AnimateIn>
						{headline && (
							<AnimateInWords text={headline} tag="h2" className={s.headline} />
						)}
						{subheading && (
							<AnimateInContent>
								<p className={s.subheading}>{subheading}</p>
							</AnimateInContent>
						)}
					</AnimateIn>
				</div>

				{/* Right column: body text */}
				<div className={s.bodyColumn}>
					<AnimateIn>
						<AnimateInContent>
							<div
								className={s.body}
								dangerouslySetInnerHTML={{ __html: body }}
							/>
						</AnimateInContent>
					</AnimateIn>
				</div>
			</div>
		</section>
	)
}
