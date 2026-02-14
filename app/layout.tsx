import { Header } from '@/components/header/header'
import { HeaderTicker } from '@/components/header/header-ticker'
import { Footer } from '@/components/footer/footer'
import './globals.css'

export const metadata = {
	title: 'P448',
	description: 'P448 — You Can Surf Later',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body data-theme="light" className="theme-light">
				<Header />
				<HeaderTicker />
				<main style={{ marginBlockStart: 'var(--Announcement_Height)' }}>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
