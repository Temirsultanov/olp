import React from 'react'
import './style.scss'

interface IProps {
	className?: string
	children: React.ReactNode
	clickHandler?: React.MouseEventHandler<HTMLButtonElement>
	type?: 'submit' | 'button'
	unfilled?: boolean
	active?: boolean
	disabled?: boolean
}

export const Button = ({
	className,
	children,
	clickHandler,
	type = 'button',
	unfilled = false,
	active = false,
	disabled = false
}: IProps) => {
	return (
		<button
			onClick={clickHandler}
			className={['button accent-m', className, unfilled ? 'button-unfilled' : '', active ? 'button-active' : ''].join(
				' '
			)}
			disabled={disabled}
			type={type}>
			{children}
		</button>
	)
}
