import * as React from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'

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
					<Link to="/#about" onClick={clickHandler} className="outline underline">
						{content.aboutUs}
					</Link>
				</li>
				<li>
					<Link to="/#services" onClick={clickHandler} className="outline underline">
						{content.services}
					</Link>
				</li>
				<li>
					<Link to="/#team" onClick={clickHandler} className="outline underline">
						{content.team}
					</Link>
				</li>
				<li>
					<Link to="/#reviews" onClick={clickHandler} className="outline underline">
						{content.reviews}
					</Link>
				</li>
				<li>
					<Link to="/#contacts" onClick={clickHandler} className="outline underline">
						{content.contacts}
					</Link>
				</li>
			</ul>
		</menu>
	)
}
