import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Review as ReviewType } from '../../../shared/types'
import './style.scss'

interface IProps {
	review: ReviewType
	photo: IGatsbyImageData
}

export const Review = ({ review, photo }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'ourReviews.review' })
	const content = {
		photoAlt: t('photoAlt')
	}

	return (
		<div className="review">
			<header className="review__header">
				<div className="review__photoWrapper">
					<GatsbyImage className="review__photo" image={photo} alt={content.photoAlt + ' ' + review.name} />
				</div>
				<h3 className="review__name accent-xl">{review.name}</h3>
			</header>
			<p className="review__text text-l">{review.text}</p>
		</div>
	)
}
