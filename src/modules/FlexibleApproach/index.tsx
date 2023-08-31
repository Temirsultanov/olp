import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Check from '../../images/icons/check.svg'
import './style.scss'

interface IProps {
	className?: string
}

export const FlexibleApproach = ({ className }: IProps) => {
	return (
		<section className={'flexibleApproach' + className}>
			<div className="flexibleApproach__photoWrapper">
				<StaticImage className="flexibleApproach__photo" src="../../images/courier.png" alt="Courier" />
			</div>
			<div className="flexibleApproach__content">
				<h2 className="flexibleApproach__title heading-l">Гибкий подход к клиентам</h2>
				<p className="flexibleApproach__description accent-l">
					Работаем с любыми участниками внешне экономической деятельности
				</p>
				<ul className="flexibleApproach__features">
					<li>
						<div className="flexibleApproach__iconWrapper">
							<Check />
						</div>
						<p className="text-l">Физическими Лицами</p>
					</li>
					<li>
						<div className="flexibleApproach__iconWrapper">
							<Check />
						</div>
						<p className="text-l">Юридическими Лицами</p>
					</li>
					<li>
						<div className="flexibleApproach__iconWrapper">
							<Check />
						</div>
						<p className="text-l">Индивидуальными Предпринимателями</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
