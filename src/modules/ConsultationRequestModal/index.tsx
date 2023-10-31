import React, { useCallback, useState, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { ym } from '../../shared/helpers'
import { ModalTemplate, MODAL_CLOSING_TIME } from '../../ui/ModalTemplate'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	submit: Function
}

export const ConsultationRequestModal = ({ opened, close, submit }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'consultationRequestModal' })
	const content = {
		title: t('title'),
		description: t('description'),
		nameInputLabel: t('nameInputLabel'),
		nameInputPlaceholder: t('nameInputPlaceholder'),
		phoneInputLabel: t('phoneInputLabel'),
		phoneInputPlaceholder: t('phoneInputPlaceholder'),
		privacyBegin: t('privacyBegin'),
		privacyLink: t('privacyLink'),
		privacyEnd: t('privacyEnd')
	}

	const formElem = useRef<HTMLFormElement | null>(null)
	const [invalid, setInvalid] = useState(false)

	const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		resetForm()
		submit(new FormData(event.currentTarget))
		ym('submit_main_consult')
	}, [])

	const resetForm = () => {
		setTimeout(() => {
			setInvalid(false)
			if (formElem.current) formElem.current.reset()
		}, MODAL_CLOSING_TIME)
	}

	const closeWrapper = useCallback(() => {
		setTimeout(() => {
			setInvalid(false)
			if (formElem.current) formElem.current.reset()
		}, MODAL_CLOSING_TIME)
		close()
	}, [])

	return (
		<>
			<ModalTemplate className="consultationRequestModal" close={closeWrapper} opened={opened}>
				<h2 className="consultationRequestModal__title accent-xl">{content.title}</h2>
				<p className="consultationRequestModal__description text-m">{content.description}</p>
				<form
					ref={formElem}
					onInvalid={() => setInvalid(true)}
					onSubmit={submitHandler}
					method="POST"
					action=""
					className={'consultationRequestModal__form' + (invalid ? ' form-invalid' : '')}
					name="callRequest">
					<Input
						label={content.nameInputLabel}
						required={true}
						id="consultationRequestModal-name"
						name="name"
						placeholder={content.nameInputPlaceholder}
					/>
					<Input
						className="consultationRequestModal__phoneInput"
						label={content.phoneInputLabel}
						required={true}
						id="consultationRequestModal-phone"
						name="phone"
						type="tel"
						placeholder={content.phoneInputPlaceholder}
					/>
					<Button type="submit" className="consultationRequestModal__button">
						{content.title}
					</Button>
					<p className="text-s consultationRequestModal__privacy">
						{content.privacyBegin}
						<a target="_blank" href="/privacy" className="outline underline">
							{content.privacyLink}
						</a>
						{content.privacyEnd}
					</p>
				</form>
			</ModalTemplate>
		</>
	)
}
