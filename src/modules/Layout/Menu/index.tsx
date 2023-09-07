import * as React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import './style.scss'

interface IProps {
	className?: string
	clickHandler?: React.MouseEventHandler
}

export const Menu = ({ className, clickHandler }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'header.menu' })
	const content = {
		aboutUs: t('aboutUs'),
		services: t('services'),
		team: t('team'),
		reviews: t('reviews'),
		contacts: t('contacts')
	}

	return (
		<menu className={'menu accent-s ' + className}>
			<ul>
				<li>
					<a onClick={clickHandler} className="outline underline" href="/#about">
						{content.aboutUs}
					</a>
				</li>
				<li>
					<a onClick={clickHandler} className="outline underline" href="/#services">
						{content.services}
					</a>
				</li>
				<li>
					<a onClick={clickHandler} className="outline underline" href="/#team">
						{content.team}
					</a>
				</li>
				<li>
					<a onClick={clickHandler} className="outline underline" href="/#reviews">
						{content.reviews}
					</a>
				</li>
				<li>
					<a onClick={clickHandler} className="outline underline" href="/#contacts">
						{content.contacts}
					</a>
				</li>
			</ul>
		</menu>
	)
}
