import React, { useCallback, useState, useRef } from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { ModalTemplate, MODAL_CLOSING_TIME } from '../../ui/ModalTemplate'
import { Input } from '../../ui/Input'
import { Textarea } from '../../ui/Input/Textarea'
import { Button } from '../../ui/Button'
import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	submit: Function
}

export const WriteUsModal = ({ opened, close, submit }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'writeUsModal' })
	const content = {
		title: t('title'),
		description: t('description'),
		nameInputLabel: t('nameInputLabel'),
		nameInputPlaceholder: t('nameInputPlaceholder'),
		emailInputLabel: t('emailInputLabel'),
		emailInputPlaceholder: t('emailInputPlaceholder'),
		descriptionInputLabel: t('descriptionInputLabel'),
		descriptionInputPlaceholder: t('descriptionInputPlaceholder'),
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
			<ModalTemplate className="writeUsModal" close={closeWrapper} opened={opened}>
				<h2 className="writeUsModal__title accent-xl">{content.title}</h2>
				<p className="writeUsModal__description text-m">{content.description}</p>
				<form
					ref={formElem}
					onInvalid={() => setInvalid(true)}
					onSubmit={submitHandler}
					method="POST"
					action=""
					className={'writeUsModal__form' + (invalid ? ' form-invalid' : '')}
					name="writeUs">
					<Input
						label={content.nameInputLabel}
						required={true}
						id="writeUsModal-name"
						name="name"
						placeholder={content.nameInputPlaceholder}
					/>
					<Input
						className="writeUsModal__emailInput"
						label={content.emailInputLabel}
						required={true}
						id="writeUsModal-phone"
						name="email"
						type="email"
						placeholder={content.emailInputPlaceholder}
					/>
					<Textarea
						className="writeUsModal__descriptionInput"
						label={content.descriptionInputLabel}
						required={true}
						id="writeUsModal-description"
						name="description"
						placeholder={content.descriptionInputPlaceholder}
					/>
					<Button type="submit" className="writeUsModal__button">
						{content.title}
					</Button>
					<p className="text-s writeUsModal__privacy">
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
