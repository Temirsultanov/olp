import React, { useState } from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'

import { Service as ServiceType } from '../../shared/types'
import { Service } from './Service'
import './style.scss'

interface IProps {
	className?: string
}

export const OurServices = ({ className }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'ourServices' })
	const content = {
		title: t('title')
	}

	const SERVICES: ServiceType[] = t('services', { returnObjects: true })
	const [openedService, setOpenedService] = useState<number | null>(null)
	const renderedServices = SERVICES.map((service, index) => {
		const num = String(index + 1).padStart(2, '0')
		return (
			<Service
				key={service.id}
				service={service}
				num={num}
				openedService={openedService}
				setOpenedService={setOpenedService}
			/>
		)
	})

	return (
		<section className={'ourServices' + className}>
			<Link id="services" to="/#services" className="ourServices__title section-link focus-visible-outline">
				<h2 className="heading-l">{content.title}</h2>
			</Link>
			<ul className="ourServices__list">{renderedServices}</ul>
		</section>
	)
}
