import React, { useState, useCallback, useRef } from 'react'

import * as Logo from '../../../ui/Logo'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'
import PhoneIcon from '../../../images/icons/phone.svg'
import GlobeIcon from '../../../images/icons/globe.svg'

import { Menu } from '../Menu'
import { SecondaryButton } from '../../../ui/SecondaryButton'
import { CallRequestModal } from '../../CallRequestModal'
import { SuccessModal } from '../../SuccessModal'

import { CONTACTS } from '../../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const Header = ({ className }: IProps) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const [callRequestModalOpened, setCallRequestModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)

	const submitRequestModalHandler = useCallback((form: HTMLFormElement) => {
		closeCallRequestModal()
		openSuccessModal()
		formRef.current = form
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
		if (formRef.current) formRef.current.reset()
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
					<a className="header__waLink link outline" href={CONTACTS.whatsapp.link}>
						<WhatsappIcon />
					</a>
					<a className="header__emailLink link outline" href={CONTACTS.email.link}>
						<EmailIcon />
					</a>
					<SecondaryButton className=" header__orderCall" Icon={PhoneIcon} clickHandler={openCallRequestModal}>
						Заказать звонок
					</SecondaryButton>
					<button className="header__changeLang outline">
						<GlobeIcon />
					</button>
				</div>
			</header>
			<CallRequestModal
				opened={callRequestModalOpened}
				close={closeCallRequestModal}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={closeSuccessModal} />
		</>
	)
}
