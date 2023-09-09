import React from 'react'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'

import EmailIcon from '../../images/icons/email.svg'
import PhoneIcon from '../../images/icons/phone.svg'
import MapIcon from '../../images/icons/map.svg'

import { Form } from './Form'
import './style.scss'
import { Contacts as ContactsType } from '../../shared/types'

interface IProps {
	className?: string
}

type Icon = ['email' | 'phone' | 'address', React.FunctionComponent<React.SVGAttributes<SVGElement>>]

export const Contacts = ({ className }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'contacts' })
	const content = {
		title1: t('title1'),
		title2: t('title2'),
		subtitle: t('subtitle')
	}

	const { t: translateContacts } = useTranslation('common')
	const CONTACTS: ContactsType = translateContacts('contacts', { returnObjects: true })

	const icons: Icon[] = [
		['email', EmailIcon],
		['phone', PhoneIcon],
		['address', MapIcon]
	]

	const renderedContacts = icons.map(entry => {
		const [contactName, Icon] = entry
		return (
			<li key={contactName}>
				<a target="_blank" href={CONTACTS[contactName].link} className="underline outline">
					<Icon />
					<p className="accent-m">{CONTACTS[contactName].text}</p>
				</a>
			</li>
		)
	})

	return (
		<section className={'contacts' + className}>
			<Link id="contacts" to="/#contacts" className="contacts__title section-link focus-visible-outline">
				<h2 className="heading-l">
					<span className="contacts__title-grey">{content.title1}</span> <span>{content.title2}</span>
				</h2>
			</Link>
			<Form className="contacts__form" />
			<div className="contacts__list">
				<h3 className="contacts__subtitle accent-xl">{content.subtitle}</h3>
				<ul className="contacts__list">{renderedContacts}</ul>
			</div>
		</section>
	)
}
