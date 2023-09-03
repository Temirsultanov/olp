import React, { useState } from 'react'
import PaperClipIcon from '../../../images/icons/paperclip.svg'

import { InputTemplate, IProps as IInputCommonProps } from '../InputTemplate'
import './style.scss'

interface IProps extends IInputCommonProps {
	name: string
	placeholder?: string
	accept?: string
}

export const FileInput = ({ accept = '*', id, name, required = false, label, placeholder = '', className }: IProps) => {
	const [value, setValue] = useState('')
	const [labelValue, setLabelValue] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setValue(newValue)
		const indexOfPathWithoutFolders = newValue.lastIndexOf('\\') + 1
		setLabelValue(newValue.slice(indexOfPathWithoutFolders))
	}

	return (
		<InputTemplate
			id={id}
			required={required}
			label={label}
			className={className + ' input-file' + (value === '' ? '  input-empty' : '')}>
			<input
				onChange={changeHandler}
				value={value}
				accept={accept}
				id={id}
				name={name}
				type="file"
				className="input__item text-s"
			/>
			<label htmlFor={id} className="input__item text-s input__item-fake">
				{labelValue || <span className="input__placeholder">{placeholder}</span>}
			</label>
			<PaperClipIcon className="input__paperClip" />
		</InputTemplate>
	)
}
