import React, { useState } from 'react'
import ArrowDown from '../../../images/icons/arrow-down-small.svg'
import { InputTemplate, IProps as IInputCommonProps } from '../InputTemplate'
import './style.scss'

interface IProps extends IInputCommonProps {
	children: React.ReactNode
	name: string
}

export const SelectInput = ({ children, id, name, required = false, label, className = '' }: IProps) => {
	const [value, setValue] = useState('')
	const onSelectChange = function (e: React.ChangeEvent<HTMLSelectElement>) {
		setValue(e.target.value)
		e.target.blur()
	}

	return (
		<InputTemplate
			id={id}
			required={required}
			label={label}
			className={className + (value === '' ? ' input-empty' : '')}>
			<select
				onChange={onSelectChange}
				value={value}
				id={id}
				name={name}
				required={required}
				className="input__item text-s">
				{children}
			</select>
			<ArrowDown className="input__arrowDown" />
		</InputTemplate>
	)
}
