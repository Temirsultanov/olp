import React, { useState, useCallback } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import * as Logo from '../../../ui/Logo'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'

import { SecondaryButton } from '../../../ui/SecondaryButton'
import { WriteUsModal } from '../../WriteUsModal'
import { SuccessModal } from '../../SuccessModal'
import { Contacts as ContactsType } from '../../../shared/types'
import { writeToSupport } from '../../../shared/api'
import './style.scss'
interface IProps {
	className?: string
}

export const Footer = ({ className }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'footer' })
	const content = {
		support: t('support'),
		requisites: t('requisites'),
		companyName: t('companyName'),
		copyright: t('copyright'),
		privacy: t('privacy')
	}

	const { t: translateContacts } = useTranslation('common')
	const CONTACTS: ContactsType = translateContacts('contacts', { returnObjects: true })

	const [writeUsModalOpened, setWriteUsModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)

	const submitRequestModalHandler = useCallback((formData: FormData) => {
		setWriteUsModalOpened(false)
		setSuccessModalOpened(true)
		writeToSupport(formData)
	}, [])

	return (
		<>
			<footer className={'footer' + className}>
				<div>
					<Logo.White className="footer__logo" />
					<div className="footer__socials">
						<a target="_blank" className="footer__waLink outline" href={CONTACTS.whatsapp.link}>
							<WhatsappIcon />
						</a>
						<a target="_blank" className="footer__emailLink outline" href={CONTACTS.email.link}>
							<EmailIcon />
						</a>
						<SecondaryButton clickHandler={() => setWriteUsModalOpened(true)}>{content.support}</SecondaryButton>
					</div>
				</div>
				<div>
					<p className="footer__requisites text-s">
						<span>{content.companyName}</span>
						<span>{content.requisites}</span>
					</p>
					<p className="footer__copyright text-s">{content.copyright}</p>
					<a target="_blank" className="footer__policy accent-s outline underline" href="/privacy">
						{content.privacy}
					</a>
				</div>
			</footer>
			<WriteUsModal
				opened={writeUsModalOpened}
				close={() => setWriteUsModalOpened(false)}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={() => setSuccessModalOpened(false)} />
		</>
	)
}
