import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Employee as EmployeeType } from '../../../shared/types'
import './style.scss'

interface IProps {
	employee: EmployeeType
	photo: IGatsbyImageData
}

export const Employee = ({ employee, photo }: IProps) => {
	return (
		<li className="employee">
			<div className="employee__photoWrapper">
				<GatsbyImage className="employee__photo" image={photo} alt={'Photo of ' + employee.name} />
			</div>
			<h3 className="employee__name accent-xl">{employee.name}</h3>
			<p className="employee__role text-l">{employee.role}</p>
		</li>
	)
}
