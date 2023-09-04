import React, { useCallback, useState } from 'react'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	submit: Function
}

export const ConsultationRequestModal = ({ opened, close, submit }: IProps) => {
	const [invalid, setInvalid] = useState(false)

	const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		submit(event.currentTarget)
	}, [])

	return (
		<>
			<ModalTemplate className="consultationRequestModal" close={close} opened={opened}>
				<h2 className="consultationRequestModal__title accent-xl">Заказать консультацию</h2>
				<p className="consultationRequestModal__description text-m">
					Закажите консультацию, и наш менеджер свяжется с вами, чтобы ответить на все интересующие вас вопросы.
				</p>
				<form
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
