"use client"

import { useState } from 'react'
import { Image } from '@/components/image'
import { Link } from '@/components/link'
import { newsFeedItems, newsFeedCTA } from '@/lib/data/news-feed'
import s from './news-feed.module.css'

export function NewsFeed() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button type="button" className={s.trigger} onClick={() => setOpen(true)}>
				<div className={s.triggerMedia}>
					<Image src={newsFeedItems[0].image} width={40} height={40} alt={newsFeedItems[0].title} />
				</div>
				<div className={s.triggerCopy}>
					<strong>{newsFeedCTA.label}</strong>
					<em>{newsFeedCTA.helper}</em>
				</div>
			</button>

			<div className={`${s.drawer} ${open ? s.drawerOpen : ''}`} aria-hidden={!open}>
				<div className={s.drawerHeader}>
					<span className={s.drawerTitle}>Feed</span>
					<button type="button" className={s.closeButton} onClick={() => setOpen(false)} aria-label="Close feed">
						×
					</button>
				</div>
				<div className={s.drawerBody}>
					{newsFeedItems.map((item) => (
						<Link key={item.title} href={item.href} className={s.feedItem}>
							<div className={s.feedImage}>
								<Image src={item.image} width={120} height={120} alt={item.title} />
							</div>
							<div className={s.feedCopy}>
								<p className={s.feedTitle}>{item.title}</p>
								<p className={s.feedDescription}>{item.description}</p>
								<span className={s.feedLink}>
									{item.linkLabel}
									<span aria-hidden="true">→</span>
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>

			{open && <div className={s.backdrop} onClick={() => setOpen(false)} />}
		</>
	)
}
