import React from 'react'
import { Button } from '../../ui/Button'
import { StaticImage } from 'gatsby-plugin-image'
import Pin from '../../images/icons/pin.svg'
import PathDesktop from '../../images/icons/path.svg'
import PathMobile from '../../images/icons/path-mobile.svg'

import './style.scss'

interface IProps {
	className?: string
	openConsultationRequestModal: Function
}

export const Guarantee = ({ className, openConsultationRequestModal }: IProps) => {
	const content = {
		title_1: 'Гарантируем надёжную',
		title_2: ' и своевременную доставку',
		title_3: ' вашего груза в точку назначения',
		requestConsultation: 'Заказать консультацию'
	}

	return (
		<section className={'guarantee' + className}>
			<h2 className="guarantee__title heading-l">
				<span>{content.title_1}</span>
				<span>{content.title_2}</span>
				<span className="guarantee__title-black">{content.title_3}</span>
			</h2>
			<PathMobile className="guarantee__path guarantee__path-mobile" />
			<Button clickHandler={() => openConsultationRequestModal()} className="guarantee__button">
				{content.requestConsultation}
			</Button>
			<Pin className="guarantee__pin" />
			<PathDesktop className="guarantee__path guarantee__path-desktop" />
			<div className="guarantee__boxWrapper">
				<StaticImage
					placeholder="none"
					className="guarantee__box"
					src="../../images/box.png"
					alt="Box with OLP pattern"
				/>
			</div>
		</section>
	)
}
