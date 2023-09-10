import React from 'react'
import { InputTemplate, IProps as IInputCommonProps } from '../InputTemplate'

interface IProps extends IInputCommonProps {
	name: string
	placeholder?: string
	autoComplete?: 'on' | 'off'
}

export const Textarea = ({
	id,
	name,
	placeholder = '',
	required = false,
	label,
	autoComplete = 'on',
	className
}: IProps) => {
	return (
		<InputTemplate id={id} required={required} label={label} className={className}>
			<textarea
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				autoComplete={autoComplete}
				rows={3}
				className="input__item text-s"
			/>
		</InputTemplate>
	)
}
