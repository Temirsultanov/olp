import React, { useState } from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'
import { Benefit } from './Benefit'
import { Benefit as BenefitType } from '../../shared/types'
import './style.scss'

interface IProps {
	className?: string
}

export const AboutUs = ({ className = '' }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'aboutUs' })
	const content = {
		title: t('title')
	}

	const BENEFITS: BenefitType[] = t('benefits', { returnObjects: true })

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
			<Link className="aboutUs__title section-link focus-visible-outline" id="about" to="/#about">
				<h2 className="heading-xl">
					<span>{content.title}</span>
					<span>{content.title}</span>
					<span>{content.title}</span>
					<span>{content.title}</span>
				</h2>
			</Link>
			<ul className="aboutUs__benefits">{renderedBenefits}</ul>
		</section>
	)
}
