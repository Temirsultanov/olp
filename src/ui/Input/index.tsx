import React from 'react'
import { InputTemplate, IProps as IInputCommonProps } from './InputTemplate'

interface IProps extends IInputCommonProps {
	name: string
	placeholder?: string
	type?: 'text' | 'email' | 'phone' | 'file' | 'tel'
	autoComplete?: 'on' | 'off'
}

export const Input = ({
	id,
	name,
	placeholder = '',
	required = false,
	label,
	type = 'text',
	autoComplete = 'on',
	className
}: IProps) => {
	return (
		<InputTemplate id={id} required={required} label={label} className={className}>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				type={type}
				autoComplete={autoComplete}
				className="input__item text-s"
			/>
		</InputTemplate>
	)
}
