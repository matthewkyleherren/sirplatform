import { HeaderLogo } from './header-logo'
import { HeaderNav } from './header-nav'
import s from './header.module.css'

function SearchIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<rect width="9" height="9" x="4" y="4" stroke="currentColor" rx="4.5" />
			<path d="M11.5 11.5 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	)
}

function AccountIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
			<path d="M3 18c0-3.5 3.134-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	)
}

function CartIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M5 7h10l-1 9H6L5 7Z" stroke="currentColor" strokeWidth="1.5" />
			<path d="M7 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" />
		</svg>
	)
}

const searchTerms = ['Search...', 'New Arrivals', 'Velato Sand', 'Women Sneaker']

export function Header() {
	return (
		<header className={s.header}>
			<div className={s.banner}>
				<div className={s.bannerMain}>
					<HeaderLogo />
					<HeaderNav />
				</div>
				<div className={s.bannerAncillary}>
					<button className={s.searchButton} aria-label="Open search">
						<span className={s.searchIcon}>
							<SearchIcon />
						</span>
						<span className={s.searchTicker}>
							{searchTerms.map((term) => (
								<span key={term} className={s.searchTickerItem}>
									{term}
								</span>
							))}
						</span>
					</button>
					<ul className={s.utilityList}>
						<li>
							<a href="/account" className={s.utilityLink}>
								<span>Account</span>
								<span className={s.utilityIcon}>
									<AccountIcon />
								</span>
							</a>
						</li>
						<li>
							<a href="/cart" className={s.utilityLink}>
								<span>Bag</span>
								<span className={s.utilityIcon}>
									<CartIcon />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
