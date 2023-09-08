import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Employee as EmployeeType } from '../../../shared/types'
import './style.scss'

interface IProps {
	employee: EmployeeType
	photo: IGatsbyImageData
}

export const Employee = ({ employee, photo }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'ourTeam.employee' })
	const content = {
		photoAlt: t('photoAlt')
	}

	return (
		<div className="employee">
			<div className="employee__photoWrapper">
				<GatsbyImage className="employee__photo" image={photo} alt={content.photoAlt + ' ' + employee.name} />
			</div>
			<h3 className="employee__name accent-xl">{employee.name}</h3>
			<p className="employee__role text-l">{employee.role}</p>
		</div>
	)
}
