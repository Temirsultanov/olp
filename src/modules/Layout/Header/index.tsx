import React, { useState, useCallback } from 'react'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import * as Logo from '../../../ui/Logo'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'
import PhoneIcon from '../../../images/icons/phone.svg'
import GlobeIcon from '../../../images/icons/globe.svg'

import { Menu } from '../Menu'
import { SecondaryButton } from '../../../ui/SecondaryButton'
import { CallRequestModal } from '../../CallRequestModal'
import { SuccessModal } from '../../SuccessModal'
import { ChangeLanguageModal } from '../../ChangeLanguageModal'

import { CONTACTS } from '../../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const Header = ({ className }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'header' })
	const i18nextContext = useI18next()
	const currentLanguage = i18nextContext.language.toUpperCase()
	const content = {
		callRequest: t('callRequest')
	}

	const [callRequestModalOpened, setCallRequestModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)
	const [changeLanguageModalOpened, setChangeLanguageModalOpened] = useState(false)

	const submitRequestModalHandler = useCallback(() => {
		closeCallRequestModal()
		openSuccessModal()
	}, [])

	const openCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(true)
	}, [])

	const closeCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(false)
	}, [])

	const openSuccessModal = useCallback(() => {
		setSuccessModalOpened(true)
	}, [])

	const closeSuccessModal = useCallback(() => {
		setSuccessModalOpened(false)
	}, [])

	const openChangeLanguageModal = useCallback(() => {
		setChangeLanguageModalOpened(true)
	}, [])

	const closeChangeLanguageModal = useCallback(() => {
		setChangeLanguageModalOpened(false)
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
					<nav>
						<Menu className="header__menu" />
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
					<SecondaryButton className=" header__orderCall" Icon={PhoneIcon} clickHandler={openCallRequestModal}>
						{content.callRequest}
					</SecondaryButton>
					<button className="header__changeLang outline" onClick={() => openChangeLanguageModal()}>
						<GlobeIcon />
						<span className="accent-s">{currentLanguage}</span>
					</button>
				</div>
			</header>
			<CallRequestModal
				opened={callRequestModalOpened}
				close={closeCallRequestModal}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={closeSuccessModal} />
			<ChangeLanguageModal
				setRussianLanguage={setRussianLanguage}
				setEnglishLanguage={setEnglishLanguage}
				opened={changeLanguageModalOpened}
				close={closeChangeLanguageModal}></ChangeLanguageModal>
		</>
	)
}
