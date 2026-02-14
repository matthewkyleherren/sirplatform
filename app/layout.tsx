import localFont from 'next/font/local'
import { Header } from '@/components/header/header'
import { HeaderTicker } from '@/components/header/header-ticker'
import { Footer } from '@/components/footer/footer'
import './globals.css'

const apercu = localFont({
	src: [
		{ path: '../public/fonts/apercu-pro-regular.woff2', weight: '400', style: 'normal' },
		{ path: '../public/fonts/apercu-pro-medium.woff2', weight: '500', style: 'normal' },
		{ path: '../public/fonts/apercu-pro-regular-italic.woff2', weight: '400', style: 'italic' },
	],
	variable: '--font-apercu',
	display: 'swap',
})

export const metadata = {
	title: 'P448',
	description: 'P448 — You Can Surf Later',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={apercu.variable}>
			<body data-theme="light" className={`theme-light ${apercu.variable}`}>
				<Header />
				<HeaderTicker />
				<main style={{ marginBlockStart: 'var(--Announcement_Height)' }}>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
