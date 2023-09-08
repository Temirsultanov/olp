import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Check from '../../images/icons/check.svg'
import './style.scss'

interface IProps {
	className?: string
}

export const FlexibleApproach = ({ className }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'flexibleApproach' })
	const content = {
		title: t('title'),
		description: t('description'),
		members: t('members', { returnObjects: true }) as string[],
		imageAlt: t('imageAlt')
	}

	return (
		<section className={'flexibleApproach' + className}>
			<div className="flexibleApproach__photoWrapper">
				<StaticImage className="flexibleApproach__photo" src="../../images/courier.png" alt={content.imageAlt} />
			</div>
			<div className="flexibleApproach__content">
				<h2 className="flexibleApproach__title heading-l">{content.title}</h2>
				<p className="flexibleApproach__description accent-l">{content.description}</p>
				<ul className="flexibleApproach__features">
					{content.members.map(member => (
						<li key={member}>
							<div className="flexibleApproach__iconWrapper">
								<Check />
							</div>
							<p className="text-l">{member}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
