import React from 'react'
import './style.scss'

interface IProps {
	className?: string
	children: React.ReactNode
	Icon?: JSX.ElementType
}

export const SecondaryButton = ({ className, children, Icon }: IProps) => {
	return (
		<button className={'secondaryButton accent-s ' + className}>
			{Icon ? <Icon className="secondaryButton__icon" /> : null}
			{children}
		</button>
	)
}
