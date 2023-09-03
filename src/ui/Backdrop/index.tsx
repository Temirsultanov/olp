import React from 'react'
import './style.scss'

interface IProps {
	close: Function
	children: React.ReactNode
	opened: boolean
}

export const Backdrop = ({ children, opened, close }: IProps) => {
	return (
		<div onClick={() => close()} className={'backdrop' + (opened ? ' backdrop-opened' : '')}>
			{children}
		</div>
	)
}
