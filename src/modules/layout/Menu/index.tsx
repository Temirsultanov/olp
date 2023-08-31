import * as React from 'react'
import './style.scss'

interface IProps {
	className?: string
}

export const Menu = ({ className }: IProps) => {
	return (
		<menu className={'menu accent-s ' + className}>
			<ul>
				<li>
					<a className="outline underline" href="/#about">
						О компании
					</a>
				</li>
				<li>
					<a className="outline underline" href="/#services">
						Услуги
					</a>
				</li>
				<li>
					<a className="outline underline" href="/#team">
						Команда
					</a>
				</li>
				<li>
					<a className="outline underline" href="/#reviews">
						Отзывы
					</a>
				</li>
				<li>
					<a className="outline underline" href="/#contacts">
						Контакты
					</a>
				</li>
			</ul>
		</menu>
	)
}
