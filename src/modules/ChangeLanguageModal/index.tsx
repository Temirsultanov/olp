import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Button } from '../../ui/Button'
import './style.scss'

interface IProps {
	opened: boolean
	close: Function
	setRussianLanguage: React.MouseEventHandler<HTMLButtonElement>
	setEnglishLanguage: React.MouseEventHandler<HTMLButtonElement>
	currentLanguage: string
}

export const ChangeLanguageModal = ({
	opened,
	close,
	setRussianLanguage,
	setEnglishLanguage,
	currentLanguage
}: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'changeLanguageModal' })
	const content = {
		title: t('title')
	}

	return (
		<ModalTemplate className="changeLanguageModal" close={close} opened={opened}>
			<h2 className="changeLanguageModal__title accent-xl">{content.title}</h2>
			<div className="changeLanguageModal__buttons">
				<Button unfilled={true} active={currentLanguage === 'RU'} clickHandler={setRussianLanguage}>
					(RU) Русский
				</Button>
				<Button unfilled={true} active={currentLanguage === 'EN'} clickHandler={setEnglishLanguage}>
					(EN) English
				</Button>
			</div>
		</ModalTemplate>
	)
}
