import React from 'react'
import { InputTemplate } from './InputTemplate'

interface IProps {
	className?: string
	label?: string
	name: string
	id: string
	placeholder?: string
	required?: boolean
	type?: 'text' | 'email' | 'phone' | 'file' | 'tel'
	autoComplete?: 'on' | 'off'
}

export const Input = ({
	className,
	label,
	name,
	id,
	placeholder = '',
	required = false,
	type = 'text',
	autoComplete = 'on'
}: IProps) => {
	return (
		<InputTemplate className={className} label={label} id={id} required={required}>
			<input
				name={name}
				id={id}
				className="input text-s"
				placeholder={placeholder}
				required={required}
				type={type}
				autoComplete={autoComplete}
			/>
		</InputTemplate>
	)
}
