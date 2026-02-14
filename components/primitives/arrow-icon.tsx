interface ArrowIconProps {
	className?: string
}

/**
 * Small right-pointing arrow icon used in buttons throughout the site.
 */
export function ArrowIcon({ className }: ArrowIconProps) {
	return (
		<svg
			className={className}
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
