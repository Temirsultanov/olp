import React, { useState } from 'react'
import { SERVICES } from '../../shared/constants'
import { Service } from './Service'
import './style.scss'

interface IProps {
	className?: string
}

export const OurServices = ({ className }: IProps) => {
	const [openedService, setOpenedService] = useState<number | null>(null)
	const content = {
		title: 'Наши услуги для\u00A0вашего бизнеса'
	}

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
			<a id="services" href="#services" className="ourServices__title section-link focus-visible-outline">
				<h2 className="heading-l">{content.title}</h2>
			</a>
			<ul className="ourServices__list">{renderedServices}</ul>
		</section>
	)
}
