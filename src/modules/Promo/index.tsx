import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { StaticImage } from 'gatsby-plugin-image'

import { Button } from '../../ui/Button'
import TruckIcon from '../../images/icons/truck.svg'
import ShipIcon from '../../images/icons/ship.svg'
import TrainIcon from '../../images/icons/train.svg'
import PlaneIcon from '../../images/icons/plane.svg'

import './style.scss'

interface ITransportProps {
	className?: string
}

interface IProps {
	className?: string
	openConsultationRequestModal: Function
}

const Transports = ({ className }: ITransportProps) => {
	return (
		<ul className={'transports ' + className}>
			<li>
				<TruckIcon />
			</li>
			<li>
				<ShipIcon />
			</li>
			<li>
				<TrainIcon />
			</li>
			<li>
				<PlaneIcon />
			</li>
		</ul>
	)
}

export const Promo = ({ className, openConsultationRequestModal }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'promo' })
	const content = {
		title1: t('title1'),
		title2: t('title2'),
		title3: t('title3'),
		requestConsultation: t('requestConsultation'),
		description: t('description'),
		internationalTransportation: t('internationalTransportation'),
		customsClearance: t('customsClearance'),
		sanctionsCircumvention: t('sanctionsCircumvention'),
		sertificationServices: t('sertificationServices')
	}

	return (
		<>
			<section className={'promo' + className}>
				<div className="promo__content">
					<Transports className="promo__transports" />
					<h1 className="promo__title heading-l">
						<span>{content.title1}</span>
						<span>{content.title2}</span>
						<span className="promo__title-black">{content.title3}</span>
					</h1>
					<p className="promo__description text-l">{content.description}</p>
					<div className="promo__pattern"></div>
					<Button clickHandler={() => openConsultationRequestModal()} className="promo__button">
						{content.requestConsultation}
					</Button>
				</div>
				<ul className="promo__services">
					<li>
						<div className="promo__serviceImageWrapper">
							<StaticImage
								className="promo__serviceImage"
								src="../../images/international.webp"
								alt={content.internationalTransportation}
							/>
						</div>
						<p className="text-s">{content.internationalTransportation}</p>
					</li>
					<li>
						<div className="promo__serviceImageWrapper">
							<StaticImage
								className="promo__serviceImage"
								src="../../images/customs-clearance.webp"
								alt={content.customsClearance}
							/>
						</div>
						<p className="text-s">{content.customsClearance}</p>
					</li>
					<li>
						<div className="promo__serviceImageWrapper">
							<StaticImage
								className="promo__serviceImage"
								src="../../images/bypassing-sanctions.webp"
								alt={content.sanctionsCircumvention}
							/>
						</div>
						<p className="text-s">{content.sanctionsCircumvention}</p>
					</li>
					<li>
						<div className="promo__serviceImageWrapper">
							<StaticImage
								className="promo__serviceImage"
								src="../../images/sertification-services.webp"
								alt={content.sertificationServices}
							/>
						</div>
						<p className="text-s">{content.sertificationServices}</p>
					</li>
				</ul>
			</section>
		</>
	)
}
