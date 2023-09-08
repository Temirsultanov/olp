import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Employee } from './Employee'
import { Employee as EmployeeType } from '../../shared/types'
import { getPhotosFromGraphQLResult } from '../../shared/helpers'
import './style.scss'

interface IProps {
	className?: string
}

export const OurTeam = ({ className }: IProps) => {
	const { allFile } = useStaticQuery(graphql`
		{
			allFile(filter: { relativePath: { regex: "/team/" } }) {
				edges {
					node {
						childImageSharp {
							gatsbyImageData(placeholder: NONE)
						}
						relativePath
					}
				}
			}
		}
	`)

	const { t } = useTranslation('index', { keyPrefix: 'ourTeam' })
	const content = {
		title1: t('title1'),
		title2: t('title2')
	}

	const EMPLOYEES: EmployeeType[] = t('employees', { returnObjects: true })

	const photos = getPhotosFromGraphQLResult(allFile)
	const renderedTeam = EMPLOYEES.map(employee => (
		<SwiperSlide key={employee.id}>
			<Employee photo={photos[employee.id]} employee={employee} />
		</SwiperSlide>
	))

	return (
		<section className={'ourTeam' + className}>
			<a id="team" href="#team" className="ourTeam__title section-link focus-visible-outline">
				<h2 className="heading-l">
					<span>{content.title1}</span> <span className="ourTeam__title-black">{content.title2}</span>
				</h2>
			</a>
			<Swiper className="ourTeam__list" slidesPerView="auto" breakpoints={{ 769: { slidesPerView: 5 } }}>
				{renderedTeam}
			</Swiper>
		</section>
	)
}
