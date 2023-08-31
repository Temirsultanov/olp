import React from 'react'
import './style.scss'

interface IProps {
	children: React.ReactNode
	required: boolean
	id: string
	label?: string
	className?: string
}

export const InputTemplate = ({ children, required, id, label, className = '' }: IProps) => {
	const renderedLabel = (
		<label className={'input__label accent-s' + (required ? ' input__label-required' : '')} htmlFor={id}>
			{label}
		</label>
	)

	return (
		<div className={'input__wrapper ' + className}>
			{label ? renderedLabel : null}
			{children}
		</div>
	)
}
