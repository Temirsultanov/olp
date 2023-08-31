import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
							gatsbyImageData
						}
						relativePath
					}
				}
			}
		}
	`)

	const photos = getPhotosFromGraphQLResult(allFile)
	const renderedTeam = EMPLOYEES.map(employee => (
		<Employee key={employee.id} photo={photos[employee.id]} employee={employee} />
	))

	return (
		<section className={'ourTeam' + className}>
			<a id="team" href="#team" className="ourTeam__title section-link focus-visible-outline">
				<h2 className="heading-l">
					<span>Команда </span>
					<span className="ourTeam__title-black">Optimal Logistic Price</span>
				</h2>
			</a>
			<ul className="ourTeam__list">{renderedTeam}</ul>
		</section>
	)
}
