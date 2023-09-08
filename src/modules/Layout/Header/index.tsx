import React, { useState, useCallback } from 'react'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import * as Logo from '../../../ui/Logo'
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
				<a className="header__waLink outline" href={CONTACTS.whatsapp.link}>
					<WhatsappIcon />
				</a>
				<a className="header__emailLink outline" href={CONTACTS.email.link}>
					<EmailIcon />
				</a>
			</div>
			<a className="header__phoneLink underline outline accent-s" href={CONTACTS.phone.link}>
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

	const submitRequestModalHandler = useCallback(() => {
		setCallRequestModalOpened(false)
		setSuccessModalOpened(true)
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
					<a href="/" className="outline">
						<Logo.Colorful className="header__logo" />
					</a>
					<nav className="header__desktopNav">
						<Menu className="header__menu" clickHandler={() => setMobileMenuOpened(false)} />
					</nav>
				</div>
				<div className="header__socialsAndLanguage">
					<a className="header__phoneLink underline outline accent-s" href={CONTACTS.phone.link}>
						{CONTACTS.phone.text}
					</a>
					<a className="header__waLink outline" href={CONTACTS.whatsapp.link}>
						<WhatsappIcon />
					</a>
					<a className="header__emailLink outline" href={CONTACTS.email.link}>
						<EmailIcon />
					</a>
					<SecondaryButton
						className="header__orderCall"
						Icon={PhoneIcon}
						clickHandler={() => setCallRequestModalOpened(true)}>
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
