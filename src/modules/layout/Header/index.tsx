import * as React from 'react'

import * as Logo from '../../../ui/Logo'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'
import PhoneIcon from '../../../images/icons/phone.svg'
import GlobeIcon from '../../../images/icons/globe.svg'

import { Menu } from '../Menu'
import { SecondaryButton } from '../../../ui/SecondaryButton'

import { CONTACTS } from '../../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const Header = ({ className }: IProps) => {
	return (
		<header className={'header' + className}>
			<div className="header__logoAndMenu">
				<a href="/" className="outline">
					<Logo.Colorful className="header__logo" />
				</a>
				<nav>
					<Menu className="header__menu" />
				</nav>
			</div>
			<div className="header__socialsAndLanguage">
				<a className="header__phoneLink underline outline accent-s" href={CONTACTS.phone.link}>
					{CONTACTS.phone.text}
				</a>
				<a className="header__waLink link outline" href={CONTACTS.whatsapp.link}>
					<WhatsappIcon />
				</a>
				<a className="header__emailLink link outline" href={CONTACTS.email.link}>
					<EmailIcon />
				</a>
				<SecondaryButton className=" header__orderCall" Icon={PhoneIcon}>
					Заказать звонок
				</SecondaryButton>
				<button className="header__changeLang outline">
					<GlobeIcon />
				</button>
			</div>
		</header>
	)
}
