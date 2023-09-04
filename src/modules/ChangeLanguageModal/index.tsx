import React from 'react'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Button } from '../../ui/Button'
import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	setRussianLanguage: React.MouseEventHandler<HTMLButtonElement>
	setEnglishLanguage: React.MouseEventHandler<HTMLButtonElement>
}

export const ChangeLanguageModal = ({ opened, close, setRussianLanguage, setEnglishLanguage }: IProps) => {
	return (
		<ModalTemplate className="changeLanguageModal" close={close} opened={opened}>
			<h2 className="changeLanguageModal__title accent-xl">Сменить язык</h2>
			<div className="changeLanguageModal__buttons">
				<Button unfilled={true} active clickHandler={setRussianLanguage}>
					(RU) Русский
				</Button>
				<Button unfilled={true} clickHandler={setEnglishLanguage}>
					(EN) English
				</Button>
			</div>
		</ModalTemplate>
	)
}
