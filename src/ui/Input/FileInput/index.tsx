import React, { useState } from 'react'
import { InputTemplate } from '../InputTemplate'
import PaperClipIcon from '../../../images/icons/paperclip.svg'
import './style.scss'

interface IProps {
	className?: string
	label?: string
	name: string
	id: string
	placeholder?: string
	required?: boolean
	accept?: string
}

export const FileInput = ({ accept = '*', className, label, name, id, placeholder = '', required = false }: IProps) => {
	const [value, setValue] = useState('')
	const [labelValue, setLabelValue] = useState('')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		const index = e.target.value.lastIndexOf('\\') + 1
		setLabelValue(e.target.value.slice(index))
	}
	return (
		<InputTemplate
			className={className + ' input__wrapper-file' + (value === '' ? '  input__wrapper-empty' : '')}
			label={label}
			id={id}
			required={required}>
			<input
				name={name}
				id={id}
				className="input text-s"
				type="file"
				accept={accept}
				onChange={changeHandler}
				value={value}
			/>
			<label htmlFor={id} className="input text-s input__fake">
				{labelValue || <span className="input__placeholder">{placeholder}</span>}
			</label>
			<PaperClipIcon className="input__paperClip" />
		</InputTemplate>
	)
}
