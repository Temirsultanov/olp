import React from 'react'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Button } from '../../ui/Button'

import './style.scss'

interface IProps {
	opened: boolean
	close: Function
}

export const SuccessModal = ({ opened, close }: IProps) => {
	return (
		<>
			<ModalTemplate className="successModal" close={close} opened={opened}>
				<h2 className="successModal__title accent-xl">Спасибо, данные успешно отправлены</h2>
				<p className="successModal__description text-m">В ближайшее время с вами свяжется наш менеджер.</p>
				<Button className="successModal__button" clickHandler={() => close()}>
					Закрыть
				</Button>
			</ModalTemplate>
		</>
	)
}
