import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Check from '../../images/icons/check.svg'
import './style.scss'

interface IProps {
	className?: string
}

export const FlexibleApproach = ({ className }: IProps) => {
	const content = {
		title: 'Гибкий подход к\u00A0клиентам',
		description: 'Работаем с участниками внешне экономической деятельности',
		members: ['Юридическими Лицами', 'Индивидуальными Предпринимателями', 'А так же с Физическими Лицами']
	}

	return (
		<section className={'flexibleApproach' + className}>
			<div className="flexibleApproach__photoWrapper">
				<StaticImage className="flexibleApproach__photo" src="../../images/courier.png" alt="Courier" />
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
