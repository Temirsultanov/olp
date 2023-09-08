import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Button } from '../../ui/Button'
import Pin from '../../images/icons/pin.svg'
import PathDesktop from '../../images/icons/path.svg'
import PathMobile from '../../images/icons/path-mobile.svg'

import './style.scss'

interface IProps {
	className?: string
	openConsultationRequestModal: Function
}

export const Guarantee = ({ className, openConsultationRequestModal }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'guarantee' })
	const content = {
		title1: t('title1'),
		title2: t('title2'),
		title3: t('title3'),
		consultationRequest: t('consultationRequest'),
		boxImageAlt: t('boxImageAlt')
	}

	return (
		<section className={'guarantee' + className}>
			<h2 className="guarantee__title heading-l">
				<span>{content.title1}</span>
				<span>{content.title2}</span>
				<span className="guarantee__title-black">{content.title3}</span>
			</h2>
			<PathMobile className="guarantee__path guarantee__path-mobile" />
			<Button clickHandler={() => openConsultationRequestModal()} className="guarantee__button">
				{content.consultationRequest}
			</Button>
			<Pin className="guarantee__pin" />
			<PathDesktop className="guarantee__path guarantee__path-desktop" />
			<div className="guarantee__boxWrapper">
				<StaticImage
					placeholder="none"
					className="guarantee__box"
					src="../../images/box.png"
					alt={content.boxImageAlt}
				/>
			</div>
		</section>
	)
}
