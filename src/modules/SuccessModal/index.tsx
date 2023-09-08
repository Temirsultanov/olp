import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Button } from '../../ui/Button'

import './style.scss'

interface IProps {
	opened: boolean
	close: Function
}

export const SuccessModal = ({ opened, close }: IProps) => {
	const { t } = useTranslation('common', { keyPrefix: 'successModal' })
	const content = {
		title: t('title'),
		description: t('description'),
		close: t('close')
	}

	return (
		<>
			<ModalTemplate className="successModal" close={close} opened={opened}>
				<h2 className="successModal__title accent-xl">{content.title}</h2>
				<p className="successModal__description text-m">{content.description}</p>
				<Button className="successModal__button" clickHandler={() => close()}>
					{content.close}
				</Button>
			</ModalTemplate>
		</>
	)
}
