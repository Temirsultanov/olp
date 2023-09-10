import React from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'
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
	setOpenedService: React.Dispatch<React.SetStateAction<string | number | null>>
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

export const Promo = ({ className, openConsultationRequestModal, setOpenedService }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'promo' })
	const content = {
		title1: t('title1'),
		title2: t('title2'),
		title3: t('title3'),
		description: t('description'),
		requestConsultation: t('requestConsultation'),
		internationalTransportation: t('internationalTransportation'),
		customsClearance: t('customsClearance'),
		sanctionsCircumvention: t('sanctionsCircumvention'),
		certificationServices: t('certificationServices')
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
						<Link
							onClick={() => setOpenedService('international-transportation')}
							className="promo__serviceLink"
							to="/#international-transportation">
							<div className="promo__serviceImageWrapper">
								<StaticImage
									className="promo__serviceImage"
									src="../../images/international.webp"
									alt={content.internationalTransportation}
									placeholder="dominantColor"
									backgroundColor="#809FA1"
								/>
							</div>
							<p className="text-s">{content.internationalTransportation}</p>
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setOpenedService('custom-clearance')}
							className="promo__serviceLink"
							to="/#custom-clearance">
							<div className="promo__serviceImageWrapper">
								<StaticImage
									className="promo__serviceImage"
									src="../../images/customs-clearance.webp"
									alt={content.customsClearance}
									placeholder="dominantColor"
									backgroundColor="#979A9D"
								/>
							</div>
							<p className="text-s">{content.customsClearance}</p>
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setOpenedService('sanctions-circumvention')}
							className="promo__serviceLink"
							to="/#sanctions-circumvention">
							<div className="promo__serviceImageWrapper">
								<StaticImage
									className="promo__serviceImage"
									src="../../images/bypassing-sanctions.webp"
									alt={content.sanctionsCircumvention}
									placeholder="dominantColor"
									backgroundColor="#405462"
								/>
							</div>
							<p className="text-s">{content.sanctionsCircumvention}</p>
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setOpenedService('certification-services')}
							className="promo__serviceLink"
							to="/#certification-services">
							<div className="promo__serviceImageWrapper">
								<StaticImage
									className="promo__serviceImage"
									src="../../images/certification-services.webp"
									alt={content.certificationServices}
									placeholder="dominantColor"
									backgroundColor="#0DB2EE"
								/>
							</div>
							<p className="text-s">{content.certificationServices}</p>
						</Link>
					</li>
				</ul>
			</section>
		</>
	)
}
