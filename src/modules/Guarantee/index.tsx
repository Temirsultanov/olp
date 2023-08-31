import React from 'react'
import { Button } from '../../ui/Button'
import { StaticImage } from 'gatsby-plugin-image'
import Pin from '../../images/icons/pin.svg'
import Path from '../../images/path.svg'
import './style.scss'

interface IProps {
	className?: string
}

export const Guarantee = ({ className }: IProps) => {
	return (
		<section className={'guarantee' + className}>
			<h2 className="guarantee__title heading-l">
				<span>Гарантируем надежную</span>
				<span> и своевременную доставку </span>
				<span className="guarantee__title-black">вашего груза в точку назначения</span>
			</h2>
			<Button className="guarantee__button">Заказать консультацию</Button>
			<Pin className="guarantee__pin" />
			<Path className="guarantee__path" />
			<StaticImage className="guarantee__box" src="../../images/box.png" alt="Box with OLP pattern" />
		</section>
	)
}
