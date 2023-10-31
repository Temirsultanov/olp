import React, { useState } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import { SelectInput } from '../../../ui/Input/Select'
import { FileInput } from '../../../ui/Input/FileInput'

import { Service as ServiceType } from '../../../shared/types'
import { isMobile, ym } from '../../../shared/helpers'
import { requestCost } from '../../../shared/api'
import './style.scss'

interface IProps {
	className?: string
}

export const Form = ({ className }: IProps) => {
	const { t } = useTranslation('index')
	const SERVICES: ServiceType[] = t('ourServices.services', { returnObjects: true })
	const content = {
		contactData: t('contacts.form.contactData'),
		nameInputLabel: t('contacts.form.nameInputLabel'),
		nameInputPlaceholder: t('contacts.form.nameInputPlaceholder'),
		surnameInputLabel: t('contacts.form.surnameInputLabel'),
		surnameInputPlaceholder: t('contacts.form.surnameInputPlaceholder'),
		emailInputLabel: t('contacts.form.emailInputLabel'),
		emailInputPlaceholder: t('contacts.form.emailInputPlaceholder'),
		additionalInformation: t('contacts.form.additionalInformation'),
		selectInputLabel: t('contacts.form.selectInputLabel'),
		selectInputPlaceholder: t('contacts.form.selectInputPlaceholder'),
		fileInputLabel: t('contacts.form.fileInputLabel'),
		fileInputLabelMobile: t('contacts.form.fileInputLabelMobile'),
		fileInputPlaceholder: t('contacts.form.fileInputPlaceholder'),
		priceRequest: t('contacts.form.priceRequest'),
		successSubmit: t('contacts.form.successSubmit'),
		privacyBegin: t('contacts.form.privacyBegin'),
		privacyLink: t('contacts.form.privacyLink'),
		privacyEnd: t('contacts.form.privacyEnd')
	}

	const [submitted, setSubmitted] = useState(false)
	const [invalid, setInvalid] = useState(false)
	const [buttonText, setButtonText] = useState(content.priceRequest)

	if (typeof window !== 'undefined') {
		content.fileInputLabel = isMobile(window.innerWidth) ? content.fileInputLabelMobile : content.fileInputLabel
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		requestCost(new FormData(event.currentTarget))
		setSubmitted(true)
		setButtonText(content.successSubmit)
		ym('submit_leadform_request_price')
	}

	return (
		<form
			method="POST"
			action=""
			className={'contactsForm ' + className + (invalid ? ' form-invalid' : '')}
			onInvalid={() => setInvalid(true)}
			encType="multipart/form-data"
			onSubmit={submitHandler}>
			<fieldset name="contacts" disabled={submitted}>
				<legend className="accent-xl">{content.contactData}</legend>
				<div className="contactsForm__inputGroup">
					<Input
						label={content.nameInputLabel}
						name="name"
						id="contactsForm-name"
						placeholder={content.nameInputPlaceholder}
						required={true}
					/>
					<Input
						label={content.surnameInputLabel}
						name="surname"
						id="contactsForm-surname"
						placeholder={content.surnameInputPlaceholder}
						required={true}
					/>
					<Input
						label={content.emailInputLabel}
						name="email"
						id="contactsForm-email"
						placeholder={content.emailInputPlaceholder}
						required={true}
						type="email"
					/>
				</div>
			</fieldset>
			<fieldset name="additional" className="contactsForm__additional" disabled={submitted}>
				<legend className="accent-xl">{content.additionalInformation}</legend>
				<SelectInput label={content.selectInputLabel} name="service" id="contactsForm-service" required={true}>
					<option value="">{content.selectInputPlaceholder}</option>
					{SERVICES.map(service => (
						<option key={service.id} value={service.title}>
							{service.title}
						</option>
					))}
				</SelectInput>
				<FileInput
					className="contactsForm__document"
					label={content.fileInputLabel}
					name="file"
					accept=".pdf, .jpeg, .jpg, .zip, .rar"
					id="contactsForm-file"
					placeholder={content.fileInputPlaceholder}
				/>
			</fieldset>
			<div className="contactsForm__footer">
				<Button type="submit" disabled={submitted} className={'contactsForm__button'}>
					{buttonText}
				</Button>
				<p className="text-s contactsForm__privacy">
					{content.privacyBegin}
					<a target="_blank" href="/privacy" className="underline outline">
						{content.privacyLink}
					</a>
					{content.privacyEnd}
				</p>
			</div>
		</form>
	)
}
