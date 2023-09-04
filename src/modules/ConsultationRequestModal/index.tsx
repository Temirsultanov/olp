import React, { useCallback, useState, useRef } from 'react'
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
	const formElem = useRef<HTMLFormElement | null>(null)
	const [invalid, setInvalid] = useState(false)

	const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		resetForm()
		submit()
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
				<h2 className="consultationRequestModal__title accent-xl">Заказать консультацию</h2>
				<p className="consultationRequestModal__description text-m">
					Закажите консультацию, и наш менеджер свяжется с вами, чтобы ответить на все интересующие вас вопросы.
				</p>
				<form
					ref={formElem}
					onInvalid={() => setInvalid(true)}
					onSubmit={submitHandler}
					method="POST"
					action=""
					className={'consultationRequestModal__form' + (invalid ? ' form-invalid' : '')}
					name="callRequest">
					<Input label="Имя" required={true} id="consultationRequestModal-name" name="name" placeholder="Ваше имя" />
					<Input
						className="consultationRequestModal__phoneInput"
						label="Телефон"
						required={true}
						id="consultationRequestModal-phone"
						name="phone"
						type="tel"
						placeholder="+7 (999) 999-99-99"
					/>
					<Button type="submit" className="consultationRequestModal__button">
						Заказать консультацию
					</Button>
					<p className="text-s consultationRequestModal__privacy">
						Нажимая кнопку, вы соглашаетесь с&nbsp;
						<a href="/privacy" className="outline underline">
							политикой&nbsp;конфиденциальности
						</a>
						.
					</p>
				</form>
			</ModalTemplate>
		</>
	)
}
