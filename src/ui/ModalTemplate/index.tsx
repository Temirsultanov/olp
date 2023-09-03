import React, { useCallback, useEffect, useRef } from 'react'
import { Backdrop } from '../Backdrop'
import CrossIcon from '../../images/icons/cross.svg'
import './style.scss'

interface IProps {
	children: React.ReactNode
	className?: string
	opened: boolean
	close: Function
}

const FOCUSALBE_SELECTOR = `a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])`
const ESCAPE = 'Escape'
const TAB = 'Tab'

const onTab = (e: KeyboardEvent, modal: HTMLDivElement | null, focusables: NodeListOf<HTMLElement> | null) => {
	if (modal && focusables && !modal.contains(document.activeElement)) {
		focusables[0].focus()
		e.preventDefault()
		return
	}

	if (focusables) {
		const first = focusables[0]
		const last = focusables[focusables.length - 1]

		if (e.shiftKey) {
			if (document.activeElement === first) {
				last.focus()
				e.preventDefault()
			}
		} else if (document.activeElement === last) {
			first.focus()
			e.preventDefault()
		}
	}
}

export const ModalTemplate = ({ children, className, opened, close }: IProps) => {
	const modal = useRef<HTMLDivElement | null>(null)
	const focusables = useRef<null | NodeListOf<HTMLElement>>(null)

	const onKeyboard = useCallback((e: KeyboardEvent) => {
		if (e.key === ESCAPE) close()
		else if (e.key === TAB) onTab(e, modal.current, focusables.current)
	}, [])

	useEffect(() => {
		if (modal.current !== null) focusables.current = modal.current.querySelectorAll(FOCUSALBE_SELECTOR)
	}, [])

	useEffect(() => {
		if (opened) {
			window.addEventListener('keydown', onKeyboard)
		} else {
			window.removeEventListener('keydown', onKeyboard)
		}
	}, [opened])
	return (
		<Backdrop opened={opened} close={close}>
			<div role="dialog" ref={modal} onClick={e => e.stopPropagation()} className={'modal ' + className}>
				{children}
				<button className="modal__closeButton outline" aria-label="close" onClick={() => close()}>
					<CrossIcon />
				</button>
			</div>
		</Backdrop>
	)
}
