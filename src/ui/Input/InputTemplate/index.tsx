import React from 'react'
import './style.scss'

export interface IProps {
	id: string
	required?: boolean
	label?: string
	className?: string
}

interface IInputTemplateProps extends IProps {
	children: React.ReactNode
}

export const InputTemplate = ({ children, id, required = false, label, className = '' }: IInputTemplateProps) => {
	const renderedLabel = (
		<label htmlFor={id} className={'input__label accent-s'}>
			{label}
		</label>
	)

	return (
		<div className={'input ' + (required ? 'input-required ' : '') + className}>
			{label ? renderedLabel : null}
			{children}
		</div>
	)
}
