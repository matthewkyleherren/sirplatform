import NextLink, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

type Props = LinkProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
		children?: React.ReactNode
	}

export function Link({ children, ...props }: Props) {
	return <NextLink {...props}>{children}</NextLink>
}
