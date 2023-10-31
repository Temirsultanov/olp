import React, { useCallback, useState, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { ModalTemplate, MODAL_CLOSING_TIME } from '../../ui/ModalTemplate'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { ym } from '../../shared/helpers'

import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	submit: Function
}

export const CallRequestModal = ({ opened, close, submit }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'callRequestModal' })
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
		ym('submit_header_call')
	}, [])

	const resetForm = () => {
		setTimeout(() => {
			setInvalid(false)
			if (formElem.current) formElem.current.reset()
		}, MODAL_CLOSING_TIME)
	}

	const closeWrapper = useCallback(() => {
		resetForm()
		close()
	}, [])

	return (
		<>
			<ModalTemplate className="callRequestModal" close={closeWrapper} opened={opened}>
				<h2 className="callRequestModal__title accent-xl">{content.title}</h2>
				<p className="callRequestModal__description text-m">{content.description}</p>
				<form
					ref={formElem}
					onInvalid={() => setInvalid(true)}
					onSubmit={submitHandler}
					method="POST"
					action=""
					className={'callRequestModal__form' + (invalid ? ' form-invalid' : '')}
					name="callRequest">
					<Input
						label={content.nameInputLabel}
						required={true}
						id="callRequest-name"
						name="name"
						placeholder={content.nameInputPlaceholder}
					/>
					<Input
						className="callRequestModal__phoneInput"
						label={content.phoneInputLabel}
						required={true}
						id="callRequest-phone"
						name="phone"
						type="tel"
						placeholder={content.phoneInputPlaceholder}
					/>
					<Button type="submit" className="callRequestModal__button">
						{content.title}
					</Button>
					<p className="text-s callRequestModal__privacy">
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
