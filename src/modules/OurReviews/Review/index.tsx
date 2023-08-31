import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Review as ReviewType } from '../../../shared/types'
import './style.scss'

interface IProps {
	review: ReviewType
	photo: IGatsbyImageData
}

export const Review = ({ review, photo }: IProps) => {
	return (
		<div className="review">
			<header className="review__header">
				<div className="review__photoWrapper">
					<GatsbyImage className="review__photo" image={photo} alt={'Photo of ' + review.name} />
				</div>
				<h3 className="review__name accent-xl">{review.name}</h3>
			</header>
			<p className="review__text text-l">{review.text}</p>
		</div>
	)
}
