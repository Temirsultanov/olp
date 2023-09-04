import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import './style.scss'

interface IProps {
	children: React.ReactNode
}

export const Layout = ({ children }: IProps) => {
	return (
		<>
			<Header className=" layout__header" />
			{children}
			<Footer className=" layout__footer" />
		</>
	)
}
