import React from 'react'
import './style.scss'

interface IProps {
	className?: string
	children: React.ReactNode
	Icon?: JSX.ElementType
	clickHandler: React.MouseEventHandler
}

export const SecondaryButton = ({ className, children, Icon, clickHandler }: IProps) => {
	return (
		<button className={'secondaryButton accent-s ' + className} onClick={clickHandler}>
			{Icon ? <Icon className="secondaryButton__icon" /> : null}
			{children}
		</button>
	)
}
