import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { InputTemplate, IProps as IInputCommonProps } from '../InputTemplate'

interface IProps extends IInputCommonProps {
	name: string
	placeholder?: string
}

export const EmailInput = ({ id, name, required = false, label, placeholder = '', className }: IProps) => {
	const { t } = useTranslation('index', { keyPrefix: 'contacts.form' })
	const content = {
		emailIsInvalid: t('emailIsInvalid')
	}

	return (
		<InputTemplate id={id} required={required} label={label} className={className}>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				className="input__item text-s"
				type="email"
				pattern="^[\w]+@[\w]+\.[\w]+$"
				title={content.emailIsInvalid}
			/>
		</InputTemplate>
	)
}
