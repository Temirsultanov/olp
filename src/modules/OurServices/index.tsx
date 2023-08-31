import React, { useState } from 'react'
import { Service as ServiceType } from '../../shared/types'
import { Service } from './Service'
import './style.scss'

const services: ServiceType[] = [
	{
		id: 1,
		title: 'Междугородние грузоперевозки',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	},
	{
		id: 2,
		title: 'Таможенное оформление',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	},
	{
		id: 3,
		title: 'Сертификационные услуги',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	},
	{
		id: 4,
		title: 'Законный обход санкций',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	},
	{
		id: 5,
		title: 'Финансовая логистика',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	},
	{
		id: 6,
		title: 'Импорт/экспорт личных вещей',
		description: `OLP предоставляет сервис по таможенному оформлению грузов при импорте и экспорте на всей территории Российской Федерации. Большой опыт наших сотрудников и налаженные связи позволяют оказывать спектр услуг в короткие сроки.`
	}
]

interface IProps {
	className?: string
}

export const OurServices = ({ className }: IProps) => {
	const [openedService, setOpenedService] = useState<number | null>(null)

	const renderedServices = services.map((service, index) => {
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
				<h2 className="heading-l">Наши услуги для вашего бизнеса</h2>
			</a>
			<ul className="ourServices__list">{renderedServices}</ul>
		</section>
	)
}
