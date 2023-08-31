import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Button } from '../../ui/Button'
import TruckIcon from '../../images/icons/truck.svg'
import ShipIcon from '../../images/icons/ship.svg'
import TrainIcon from '../../images/icons/train.svg'
import PlaneIcon from '../../images/icons/plane.svg'

import './style.scss'

interface ITransportProps {
	className?: string
}

interface IProps {
	className?: string
}

const Transports = ({ className }: ITransportProps) => {
	return (
		<ul className={'transports ' + className}>
			<li>
				<TruckIcon />
			</li>
			<li>
				<ShipIcon />
			</li>
			<li>
				<TrainIcon />
			</li>
			<li>
				<PlaneIcon />
			</li>
		</ul>
	)
}

export const Promo = ({ className }: IProps) => {
	return (
		<section className={'promo' + className}>
			<div className="promo__content">
				<Transports className="promo__transports" />
				<h1 className="promo__title heading-l">
					<span>Перевозите с нами,</span>
					<span>чтобы стать</span>
					<span className="promo__title-black">глобальными лидерами</span>
				</h1>
				<div className="promo__pattern"></div>
				<footer className="promo__footer">
					<Button className="promo__button">Заказать консультацию</Button>
					<p className="promo__description text-l">Поможем организовать международные перевозки невзирая на санкции</p>
				</footer>
			</div>
			<ul className="promo__services">
				<li>
					<p className="text-s">международные грузоперевозки</p>
				</li>
				<li>
					<p className="text-s">таможенное оформление</p>
				</li>
				<li>
					<p className="text-s">законный обход санкций</p>
				</li>
				<li>
					<p className="text-s">сертификационные услуги</p>
				</li>
			</ul>
		</section>
	)
}
