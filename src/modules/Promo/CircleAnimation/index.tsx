import React from 'react'
import './style.scss'
import { StaticImage } from 'gatsby-plugin-image'

interface IProps {
	className?: string
}

export const CircleAnimation = ({ className }: IProps) => {
	return (
		<div className={'circleAnimation ' + className}>
			<StaticImage
				className="circleAnimation__item circleAnimation__item-1"
				src="../../../images/circle.svg"
				alt="Branded circle"
			/>
			<StaticImage
				className="circleAnimation__item circleAnimation__item-2"
				src="../../../images/circle.svg"
				alt="Branded circle"
			/>
			<StaticImage
				className="circleAnimation__item circleAnimation__item-3"
				src="../../../images/circle.svg"
				alt="Branded circle"
			/>
			<StaticImage
				className="circleAnimation__item circleAnimation__item-4"
				src="../../../images/circle.svg"
				alt="Branded circle"
			/>
			<StaticImage
				className="circleAnimation__item circleAnimation__item-5"
				src="../../../images/circle.svg"
				alt="Branded circle"
			/>
		</div>
	)
}
