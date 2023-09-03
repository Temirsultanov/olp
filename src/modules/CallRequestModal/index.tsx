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

export const CallRequestModal = ({ opened, close, submit }: IProps) => {
	const [invalid, setInvalid] = useState(false)

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		submit()
	}

	return (
		<>
			<ModalTemplate className="callRequestModal" close={close} opened={opened}>
				<h2 className="callRequestModal__title accent-xl">Заказать звонок</h2>
				<p className="callRequestModal__description text-m">
					Закажите обратный звонок, и наш менеджер свяжется с вами, чтобы ответить на все интересующие вас вопросы.
				</p>
				<form
					onInvalid={() => setInvalid(true)}
					onSubmit={submitHandler}
					method="POST"
					action=""
					className={'callRequestModal__form' + (invalid ? ' form-invalid' : '')}
					name="callRequest">
					<Input label="Имя" required={true} id="callRequest-name" name="name" placeholder="Ваше имя" />
					<Input
						className="callRequestModal__phoneInput"
						label="Телефон"
						required={true}
						id="callRequest-phone"
						name="phone"
						type="tel"
						placeholder="+7 (999) 999-99-99"
					/>
					<Button type="submit" className="callRequestModal__button">
						Заказать звонок
					</Button>
					<p className="text-s callRequestModal__privacy">
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
