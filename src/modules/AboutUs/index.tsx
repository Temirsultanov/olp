import React, { useState } from 'react'
import { Benefit } from './Benefit'
import { BENEFITS } from '../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const AboutUs = ({ className = '' }: IProps) => {
	const [openedBenefit, setOpenedBenefit] = useState<number | null>(null)

	const renderedBenefits = BENEFITS.map((benefit, index) => {
		const num = String(index + 1).padStart(2, '0')
		return (
			<Benefit
				key={benefit.id}
				num={num}
				benefit={benefit}
				openedBenefit={openedBenefit}
				setOpenedBenefit={setOpenedBenefit}
			/>
		)
	})

	return (
		<section className={'aboutUs' + className}>
			<a className="aboutUs__title section-link focus-visible-outline" id="about" href="#about">
				<h2 className="heading-xl">
					<span>О компании</span>
					<span>О компании</span>
					<span>О компании</span>
				</h2>
			</a>
			<ul className="aboutUs__benefits">{renderedBenefits}</ul>
		</section>
	)
}
