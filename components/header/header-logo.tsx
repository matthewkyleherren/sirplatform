'use client'

import { Link } from '@/components/link'
import { useLogoScroll } from '@/lib/hooks/use-logo-scroll'
import s from './header.module.css'

const P448Logo = () => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 57" aria-hidden="true">
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m29.163 14.165-.62 7.126c-.788 8.789-5.44 13.567-14.058 13.567h-4.053L8.64 55.488H0L4.821.618h12.694c8.597-.02 12.394 4.758 11.648 13.547ZM12.736 8.448l-1.621 18.581h4.074c2.73 0 4.352-1.259 4.694-5.163l.725-8.234c.363-3.904-1.046-5.163-3.776-5.163h-4.096v-.021Zm14.421 29.226L46.08.597h9.408l-3.243 37.077h4.075l-.683 7.83h-4.075l-.874 9.962H42.24l.874-9.962H26.496l.661-7.83Zm16.619 0 1.792-20.629-10.496 20.63h8.704Zm14.4 0L77.098.597h9.408l-3.243 37.077h4.075l-.683 7.83h-4.053l-.875 9.962H73.28l.875-9.962H57.536l.64-7.83Zm16.618 0 1.792-20.629-10.496 20.63h8.704Zm26.261 18.454c-8.725 0-13.034-5.014-12.266-13.782l.384-4.33c.448-5.227 2.368-9.344 6.336-11.456-3.456-1.941-4.843-5.653-4.352-11.05l.17-1.729C92.117 4.992 97.322 0 106.026 0s13.034 5.013 12.266 13.781l-.17 1.728c-.491 5.398-2.603 9.11-6.315 11.05 3.584 2.113 4.779 6.187 4.331 11.457l-.384 4.33c-.768 8.747-6.016 13.782-14.699 13.782Zm.683-7.851c2.731 0 4.907-1.344 5.397-6.187l.448-5.098c.384-4.33-1.258-6.187-4.33-6.187-3.051 0-5.014 1.877-5.398 6.187l-.448 5.098c-.426 4.864 1.558 6.187 4.331 6.187Zm-2.155-31.125c-.384 4.395 1.536 5.781 4.352 5.781 2.731 0 4.971-1.408 5.376-5.781l.256-3.05c.427-4.95-1.557-6.273-4.33-6.273-2.731 0-4.971 1.344-5.398 6.272l-.256 3.05Z"
			clipRule="evenodd"
		/>
	</svg>
)

export function HeaderLogo() {
	const { containerRef, setLogoRef } = useLogoScroll<HTMLDivElement>()

	return (
		<div className={s.logoWrap}>
			<Link href="/" aria-label="P448 - Home" className={s.logoLink}>
				<div ref={containerRef} className={s.logoScroll}>
					<div className={s.logoImage} ref={setLogoRef(0)}>
						<P448Logo />
					</div>
					<div className={s.logoImage} ref={setLogoRef(1)}>
						<P448Logo />
					</div>
				</div>
				<span className="sr-only">P448</span>
			</Link>
		</div>
	)
}
