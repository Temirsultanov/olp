import React from 'react'
import { Form } from './Form'
import EmailIcon from '../../images/icons/email.svg'
import PhoneIcon from '../../images/icons/phone.svg'
import MapIcon from '../../images/icons/map.svg'

import { CONTACTS } from '../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

type Icon = ['email' | 'phone' | 'address', React.FunctionComponent<React.SVGAttributes<SVGElement>>]

export const Contacts = ({ className }: IProps) => {
	const icons: Icon[] = [
		['email', EmailIcon],
		['phone', PhoneIcon],
		['address', MapIcon]
	]

	const renderedContacts = icons.map(entry => {
		const [contactName, Icon] = entry
		return (
			<li key={contactName}>
				<a href={CONTACTS[contactName].link} className="underline outline">
					<Icon />
					<p className="accent-m">{CONTACTS[contactName].text}</p>
				</a>
			</li>
		)
	})

	return (
		<section className={'contacts' + className}>
			<a id="contacts" href="#contacts" className="contacts__title section-link focus-visible-outline">
				<h2 className="heading-l">
					<span className="contacts__title-grey">Запросите стоимость</span>
					<span> за 1 клик</span>
				</h2>
			</a>
			<Form className="contacts__form" />
			<div className="contacts__list">
				<h3 className="contacts__subtitle accent-xl">Контакты</h3>
				<ul className="contacts__list">{renderedContacts}</ul>
			</div>
		</section>
	)
}
