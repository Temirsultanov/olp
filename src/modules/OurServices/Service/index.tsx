import React, { useRef, useMemo, useEffect } from 'react'
import { Service as ServiceType } from '../../../shared/types'
import { useAccordeon } from '../../../shared/hooks/useAccordeon'
import ArrowDown from '../../../images/icons/arrow-down.svg'
import './style.scss'

interface IProps {
	service: ServiceType
	num: string
	openedService: number | null
	setOpenedService: React.Dispatch<React.SetStateAction<number | null>>
}

export const Service = ({ service, num, openedService, setOpenedService }: IProps) => {
	const accordeon = useRef(null)
	const { height, open } = useAccordeon(openedService, setOpenedService, service.id, accordeon)

	return (
		<li>
			<div className={'service ' + (openedService === service.id ? 'service-opened' : '')}>
				<button className="service__summary focus-visible-outline" onClick={open}>
					<p className="service__number accent-xl">[{num}]</p>
					<h3 className="service__title accent-xl">{service.title}</h3>
					<ArrowDown className="service__icon" />
				</button>
				<div className="service__descriptionWrapper" ref={accordeon} style={{ height }}>
					<p className="service__description text-l">{service.description}</p>
				</div>
			</div>
		</li>
	)
}
