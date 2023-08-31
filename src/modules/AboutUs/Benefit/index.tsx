import React, { useRef } from 'react'
import ArrowDown from '../../../images/icons/arrow-down.svg'

import { Benefit as BenefitType } from '../../../shared/types'
import { useAccordeon } from '../../../shared/hooks/useAccordeon'
import { isMobile } from '../../../shared/helpers'
import './style.scss'

interface IProps {
	benefit: BenefitType
	num: string
	openedBenefit: number | null
	setOpenedBenefit: React.Dispatch<React.SetStateAction<number | null>>
}

export const Benefit = ({ benefit, num, openedBenefit, setOpenedBenefit }: IProps) => {
	const accordeon = useRef(null)
	const { height, open } = useAccordeon(openedBenefit, setOpenedBenefit, benefit.id, accordeon)
	let deviceIsMobile = false

	if (typeof window !== 'undefined') {
		deviceIsMobile = isMobile(window.innerWidth)
	}

	return (
		<li className="benefit">
			<button className="benefit__summary" onClick={open} disabled={!deviceIsMobile}>
				<p className="benefit__number accent-xl">[{num}]</p>
				<h3 className="benefit__title accent-xl">{benefit.title}</h3>
				<ArrowDown className="benefit__icon" />
			</button>
			<div className="benefit__descriptionWrapper" ref={accordeon} style={{ height }}>
				<p className="benefit__description text-l">{benefit.description}</p>
			</div>
		</li>
	)
}
