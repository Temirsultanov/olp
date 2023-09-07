import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Employee } from './Employee'
import { EMPLOYEES } from '../../shared/constants'
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
					<span>Команда </span>
					<span className="ourTeam__title-black">Optimal Logistic Price</span>
				</h2>
			</a>
			<Swiper className="ourTeam__list" slidesPerView="auto" breakpoints={{ 769: { slidesPerView: 5 } }}>
				{renderedTeam}
			</Swiper>
		</section>
	)
}
