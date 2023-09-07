import React from 'react'
import './style.scss'

interface IProps {
	className?: string
	cross: boolean
	clickHandler: React.MouseEventHandler<HTMLButtonElement>
}

export const BurgerButton = ({ className, cross, clickHandler }: IProps) => {
	return (
		<button onClick={clickHandler} className={'burgerButton ' + (cross ? 'burgerButton-cross ' : '') + className}>
			<span className="burgerButton__line"></span>
		</button>
	)
}
