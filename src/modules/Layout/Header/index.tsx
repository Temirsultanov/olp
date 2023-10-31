import React, { useState, useCallback } from 'react'
import { useTranslation, useI18next, Link } from 'gatsby-plugin-react-i18next'

import * as Logo from '../../../ui/Logo'
import TelegramIcon from '../../../images/icons/tg.svg'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'
import PhoneIcon from '../../../images/icons/phone.svg'
import GlobeIcon from '../../../images/icons/globe.svg'

import { Menu } from '../Menu'
import { SecondaryButton } from '../../../ui/SecondaryButton'
import { BurgerButton } from '../../../ui/BurgerButton'
import { CallRequestModal } from '../../CallRequestModal'
import { SuccessModal } from '../../SuccessModal'
import { ChangeLanguageModal } from '../../ChangeLanguageModal'

import { Contacts as ContactsType } from '../../../shared/types'
import { requestCall } from '../../../shared/api'
import { ym } from '../../../shared/helpers'

import './style.scss'

interface IMobileMenuProps {
	currentLanguage: string
	mobileMenuOpened: boolean
	setChangeLanguageModalOpened: Function
	setMobileMenuOpened: Function
}

const MobileMenu = ({
	currentLanguage,
	mobileMenuOpened,
	setMobileMenuOpened,
	setChangeLanguageModalOpened
}: IMobileMenuProps) => {
	const { t: translateContacts } = useTranslation('common')
	const CONTACTS: ContactsType = translateContacts('contacts', { returnObjects: true })

	return (
		<div className={'mobileMenu ' + (mobileMenuOpened ? 'mobileMenu-opened' : '')}>
			<Menu clickHandler={() => setMobileMenuOpened(false)} />
			<div className="mobileMenu__socials">
				<a
					onClick={() => ym('click_header_telegram')}
					target="_blank"
					className="header__tgLink outline"
					href={CONTACTS.telegram.link}>
					<TelegramIcon />
				</a>
				<a
					onClick={() => ym('click_header_whatsapp')}
					target="_blank"
					className="header__waLink outline"
					href={CONTACTS.whatsapp.link}>
					<WhatsappIcon />
				</a>
				<a
					onClick={() => ym('click_header_email')}
					target="_blank"
					className="header__emailLink outline"
					href={CONTACTS.email.link}>
					<EmailIcon />
				</a>
			</div>
			<a
				onClick={() => ym('click_header_phone')}
				target="_blank"
				className="header__phoneLink underline outline accent-s"
				href={CONTACTS.phone.link}>
				{CONTACTS.phone.text}
			</a>
			<button className="header__changeLang outline" onClick={() => setChangeLanguageModalOpened(true)}>
				<GlobeIcon />
				<span className="accent-s">{currentLanguage}</span>
			</button>
		</div>
	)
}

interface IProps {
	className?: string
}

export const Header = ({ className }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'header' })
	const content = {
		callRequest: t('callRequest')
	}

	const { t: translateContacts } = useTranslation('common')
	const CONTACTS: ContactsType = translateContacts('contacts', { returnObjects: true })

	const i18nextContext = useI18next()
	const currentLanguage = i18nextContext.language.toUpperCase()

	const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
	const [callRequestModalOpened, setCallRequestModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)
	const [changeLanguageModalOpened, setChangeLanguageModalOpened] = useState(false)

	const submitRequestModalHandler = useCallback((formData: FormData) => {
		setCallRequestModalOpened(false)
		setSuccessModalOpened(true)
		requestCall(formData)
	}, [])

	const setRussianLanguage = useCallback(() => {
		i18nextContext.changeLanguage('ru')
		setChangeLanguageModalOpened(false)
	}, [])

	const setEnglishLanguage = useCallback(() => {
		i18nextContext.changeLanguage('en')
		setChangeLanguageModalOpened(false)
	}, [])

	return (
		<>
			<header className={'header' + className}>
				<div className="header__logoAndMenu">
					<Link onClick={() => setMobileMenuOpened(false)} to="/" className="outline">
						<Logo.Colorful className="header__logo" />
					</Link>
					<nav className="header__desktopNav">
						<Menu className="header__menu" clickHandler={() => setMobileMenuOpened(false)} />
					</nav>
				</div>
				<div className="header__socialsAndLanguage">
					<a
						onClick={() => ym('click_header_phone')}
						target="_blank"
						className="header__phoneLink underline outline accent-s"
						href={CONTACTS.phone.link}>
						{CONTACTS.phone.text}
					</a>
					<a
						onClick={() => ym('click_header_telegram')}
						target="_blank"
						className="header__tgLink outline"
						href={CONTACTS.telegram.link}>
						<TelegramIcon />
					</a>
					<a
						onClick={() => ym('click_header_whatsapp')}
						target="_blank"
						className="header__waLink outline"
						href={CONTACTS.whatsapp.link}>
						<WhatsappIcon />
					</a>
					<a
						onClick={() => ym('click_header_email')}
						target="_blank"
						className="header__emailLink outline"
						href={CONTACTS.email.link}>
						<EmailIcon />
					</a>
					<SecondaryButton
						className="header__orderCall"
						Icon={PhoneIcon}
						clickHandler={() => {
							ym('click_header_request_a_call')
							setCallRequestModalOpened(true)
						}}>
						{content.callRequest}
					</SecondaryButton>
					<button className="header__changeLang outline" onClick={() => setChangeLanguageModalOpened(true)}>
						<GlobeIcon />
						<span className="accent-s">{currentLanguage}</span>
					</button>
				</div>
				<BurgerButton
					clickHandler={() => setMobileMenuOpened(prevValue => !prevValue)}
					className="header__burgerButton"
					cross={mobileMenuOpened}
				/>
			</header>
			<MobileMenu
				mobileMenuOpened={mobileMenuOpened}
				currentLanguage={currentLanguage}
				setChangeLanguageModalOpened={setChangeLanguageModalOpened}
				setMobileMenuOpened={setMobileMenuOpened}
			/>
			<CallRequestModal
				opened={callRequestModalOpened}
				close={() => setCallRequestModalOpened(false)}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={() => setSuccessModalOpened(false)} />
			<ChangeLanguageModal
				setRussianLanguage={setRussianLanguage}
				setEnglishLanguage={setEnglishLanguage}
				opened={changeLanguageModalOpened}
				close={() => setChangeLanguageModalOpened(false)}
				currentLanguage={currentLanguage}
			/>
		</>
	)
}
