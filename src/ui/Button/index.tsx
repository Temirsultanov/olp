import React from 'react'
import './style.scss'

interface IProps {
	className?: string
	children: React.ReactNode
	clickHandler?: React.MouseEventHandler<HTMLButtonElement>
	type?: 'submit' | 'button'
}

export const Button = ({ className, children, clickHandler, type = 'button' }: IProps) => {
	return (
		<button onClick={clickHandler} className={'button accent-m ' + className} type={type}>
			{children}
		</button>
	)
}
