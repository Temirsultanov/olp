import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Review } from './Review'
import { Review as ReviewType } from '../../shared/types'
import './style.scss'
import { getPhotosFromGraphQLResult } from '../../shared/helpers'

interface IProps {
	className?: string
}

export const OurReviews = ({ className }: IProps) => {
	const { allFile } = useStaticQuery(graphql`
		{
			allFile(filter: { relativePath: { regex: "/reviews/" } }) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData
						}
						relativePath
					}
				}
			}
		}
	`)

	const { t } = useTranslation('index', { keyPrefix: 'ourReviews' })
	const content = {
		title: t('title')
	}

	const REVIEWS: ReviewType[] = t('reviews', { returnObjects: true })

	const photos = getPhotosFromGraphQLResult(allFile)
	const middleIndex = Math.ceil(REVIEWS.length / 2)

	const firstReviews = REVIEWS.slice(0, middleIndex).map(review => (
		<Review key={review.id} review={review} photo={photos[review.id]} />
	))

	const secondReviews = REVIEWS.slice(middleIndex).map(review => (
		<Review key={review.id} review={review} photo={photos[review.id]} />
	))

	return (
		<section className={'ourReviews' + className}>
			<a href="#reviews" id="reviews" className="ourReviews__title section-link focus-visible-outline">
				<h2 className="heading-l">{content.title}</h2>
			</a>
			<div className="ourReviews__list">
				<div className="ourReviews__list-half">{firstReviews}</div>
				<div className="ourReviews__list-half">{secondReviews}</div>
			</div>
		</section>
	)
}
