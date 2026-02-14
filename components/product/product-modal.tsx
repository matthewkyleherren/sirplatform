"use client"

import * as Dialog from '@radix-ui/react-dialog'
import s from './product-modal.module.css'

interface ProductModalProps {
	triggerLabel: string
	title: string
	children: React.ReactNode
	triggerClassName?: string
}

export function ProductModal({ triggerLabel, title, children, triggerClassName }: ProductModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className={triggerClassName ?? s.trigger} type="button">
					{triggerLabel}
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={s.overlay} />
				<Dialog.Content className={s.content}>
					<Dialog.Close className={s.close} aria-label="Close dialog">
						×
					</Dialog.Close>
					<Dialog.Title className={s.title}>{title}</Dialog.Title>
					<div className={s.body}>{children}</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
