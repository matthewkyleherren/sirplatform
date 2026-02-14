export interface NewsFeedItem {
	title: string
	description: string
	linkLabel: string
	href: string
	image: string
}

export const newsFeedItems: NewsFeedItem[] = [
	{
		title: 'NEW ARRIVALS',
		description: 'You heard it here first. Check out just-landed pairs to refresh your rotation.',
		linkLabel: 'Shop Now',
		href: '/collections/new-arrivals',
		image: '/images/feed/notification-new-arrivals.jpg',
	},
	{
		title: 'ANTIBES',
		description: 'Meet our first-ever boat shoe that blends coastal prep with city style.',
		linkLabel: 'Shop Now',
		href: '/collections/antibes',
		image: '/images/feed/notification-antibes.jpg',
	},
	{
		title: 'ESSENTIALS EDIT',
		description: 'Tried-and-true pairs that keep up season after season.',
		linkLabel: 'Shop Now',
		href: '/collections/the-essentials-edit',
		image: '/images/feed/notification-essentials.jpg',
	},
]

export const newsFeedCTA = {
	label: "What's New?",
	helper: 'Open feed',
}
