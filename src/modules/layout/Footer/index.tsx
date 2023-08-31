import React from 'react'

import * as Logo from '../../../ui/Logo'
import WhatsappIcon from '../../../images/icons/wa.svg'
import EmailIcon from '../../../images/icons/email.svg'
import { SecondaryButton } from '../../../ui/SecondaryButton'

import { CONTACTS } from '../../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const Footer = ({ className }: IProps) => {
	return (
		<footer className={'footer' + className}>
			<div>
				<Logo.White className="footer__logo" />
				<p className="footer__requisites text-s">
					<span>ООО «ОПТИМАЛ ЛОДЖИСТИК ПРАЙС»</span>
					<span>ИНН/КПП: 5009099032/772401001</span>
				</p>
			</div>
			<p className="footer__copyright text-s">2023 © Optimal Logistic Price</p>
			<div>
				<div className="footer__socials">
					<a className="footer__waLink outline" href={CONTACTS.whatsapp.link}>
						<WhatsappIcon />
					</a>
					<a className="footer__emailLink outline" href={CONTACTS.email.link}>
						<EmailIcon />
					</a>
					<SecondaryButton>Написать в поддержку</SecondaryButton>
				</div>
				<a className="footer__policy accent-s outline underline" href="/policy">
					Политика конфиденциальности
				</a>
			</div>
		</footer>
	)
}
