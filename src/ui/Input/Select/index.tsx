import React, { useState } from 'react'
import { InputTemplate } from '../InputTemplate'
import ArrowDown from '../../../images/icons/arrow-down-small.svg'
import './style.scss'

interface IProps {
	children: React.ReactNode
	label?: string
	className?: string
	name: string
	id: string
	required?: boolean
}

export const SelectInput = ({ className = '', children, label, name, id, required = false }: IProps) => {
	const [value, setValue] = useState('')
	const onSelectChange = function (e: React.ChangeEvent<HTMLSelectElement>) {
		setValue(e.target.value)
		e.target.blur()
	}

	return (
		<InputTemplate
			className={className + (value === '' ? ' input-empty' : '')}
			id={id}
			label={label}
			required={required}>
			<select name={name} id={id} className="input text-s" required={required} onChange={onSelectChange} value={value}>
				{children}
			</select>
			<ArrowDown className="input__arrowDown" />
		</InputTemplate>
	)
}
