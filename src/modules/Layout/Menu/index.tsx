import * as React from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'

import { ym } from '../../../shared/helpers'
import './style.scss'

interface IProps {
	className?: string
	clickHandler: () => void
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
					<Link
						to="/#about"
						onClick={() => {
							ym('click_header_about_us')
							clickHandler()
						}}
						className="outline underline">
						{content.aboutUs}
					</Link>
				</li>
				<li>
					<Link
						to="/#services"
						onClick={() => {
							ym('click_header_services')
							clickHandler()
						}}
						className="outline underline">
						{content.services}
					</Link>
				</li>
				<li>
					<Link
						to="/#team"
						onClick={() => {
							ym('click_header_team')
							clickHandler()
						}}
						className="outline underline">
						{content.team}
					</Link>
				</li>
				<li>
					<Link
						to="/#reviews"
						onClick={() => {
							ym('click_header_reviews')
							clickHandler()
						}}
						className="outline underline">
						{content.reviews}
					</Link>
				</li>
				<li>
					<Link
						to="/#contacts"
						onClick={() => {
							ym('click_header_contacts')
							clickHandler()
						}}
						className="outline underline">
						{content.contacts}
					</Link>
				</li>
			</ul>
		</menu>
	)
}
