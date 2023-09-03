import React from 'react'
import { ModalTemplate } from '../../ui/ModalTemplate'
import { Button } from '../../ui/Button'

import './style.scss'

interface IProps {
	opened: boolean
	close: Function
}

export const CallRequestSuccess = ({ opened, close }: IProps) => {
	return (
		<>
			<ModalTemplate className="callRequestSuccess" close={close} opened={opened}>
				<h2 className="callRequestSuccess__title accent-xl">Спасибо, данные успешно отправлены</h2>
				<p className="callRequestSuccess__description text-m">В ближайшее время с вами свяжется наш менеджер.</p>
				<Button className="callRequestSuccess__button" clickHandler={() => close()}>
					Закрыть
				</Button>
			</ModalTemplate>
		</>
	)
}
