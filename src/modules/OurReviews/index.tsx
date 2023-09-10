import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation, Link } from 'gatsby-plugin-react-i18next'

import { Review as ReviewType } from '../../shared/types'
import { getPhotosFromGraphQLResult } from '../../shared/helpers'
import { Button } from '../../ui/Button'
import { Review } from './Review'
import './style.scss'

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
		title: t('title'),
		show: t('show'),
		hide: t('hide')
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

	const secondHalf = useRef(null)
	const [currentReviewsHeight, setCurrentReviewsHeight] = useState<undefined | string>('0px')
	const maxReviewsHeight = useRef('auto')
	const toggleReviews = () => {
		if (secondHalf.current) {
			if (maxReviewsHeight.current === 'auto') maxReviewsHeight.current = getComputedStyle(secondHalf.current).height
			setCurrentReviewsHeight(previousHeight => {
				return previousHeight === '0px' ? maxReviewsHeight.current : '0px'
			})
		}
	}

	return (
		<section className={'ourReviews' + className}>
			<Link to="/#reviews" id="reviews" className="ourReviews__title section-link focus-visible-outline">
				<h2 className="heading-l">{content.title}</h2>
			</Link>
			<div className="ourReviews__list">
				<div className="ourReviews__list-half">{firstReviews}</div>
				<div className="ourReviews__list-half" style={{ height: currentReviewsHeight }}>
					<div ref={secondHalf}>{secondReviews}</div>
				</div>
			</div>
			<Button className="ourReviews__button" unfilled clickHandler={toggleReviews}>
				{currentReviewsHeight === '0px' ? content.show : content.hide}
			</Button>
		</section>
	)
}
