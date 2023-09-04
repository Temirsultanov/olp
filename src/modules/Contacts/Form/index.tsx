import React, { useState } from 'react'

import { Button } from '../../../ui/Button'
import { Input } from '../../../ui/Input'
import { SelectInput } from '../../../ui/Input/Select'
import { FileInput } from '../../../ui/Input/FileInput'

import { SERVICES } from '../../../shared/constants'
import './style.scss'

interface IProps {
	className?: string
}

export const Form = ({ className }: IProps) => {
	const [invalid, setInvalid] = useState(false)
	return (
		<form
			method="POST"
			action=""
			className={'contactsForm ' + className + (invalid ? ' form-invalid' : '')}
			onInvalid={() => setInvalid(true)}>
			<fieldset name="contacts">
				<legend className="accent-xl">[01] Контактные данные</legend>
				<div className="contactsForm__inputGroup">
					<Input label="Имя" name="name" id="contactsForm-name" placeholder="Ваше имя" required={true} />
					<Input label="Фамилия" name="surname" id="contactsForm-surname" placeholder="Ваша фамилия" required={true} />
					<Input
						label="Почта"
						name="name"
						id="contactsForm-email"
						placeholder="Ваш почтовый ящик"
						required={true}
						type="email"
					/>
				</div>
			</fieldset>
			<fieldset name="additional" className="contactsForm__additional">
				<legend className="accent-xl">[02] Дополнительная информация</legend>
				<SelectInput label="Выберите услугу" name="service" id="contactsForm-service" required={true}>
					<option value="">Выбрать</option>
					{SERVICES.map(service => (
						<option key={service.id} value={service.title}>
							{service.title}
						</option>
					))}
				</SelectInput>
				<FileInput
					className="contactsForm__document"
					label="Сопроводительная документация (.PDF, .JPEG, .ZIP, .RAR)"
					name="file"
					accept=".pdf, .jpeg, .jpg, .zip, .rar"
					id="contactsForm-file"
					placeholder="Прикрепить файл..."
				/>
			</fieldset>
			<div className="contactsForm__footer">
				<Button type="submit" className="contactsForm__button">
					Запросить стоимость
				</Button>
				<p className="text-s contactsForm__privacy">
					Нажимая кнопку, вы соглашаетесь с&nbsp;
					<a href="/privacy" className="underline outline">
						политикой конфиденциальности
					</a>
					.
				</p>
			</div>
		</form>
	)
}
