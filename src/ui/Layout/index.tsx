import React, { useCallback, useState } from 'react'
import { CallRequestModal } from '../../modules/CallRequestModal'
import { Header } from './Header'
import { Footer } from './Footer'
import './style.scss'

interface IProps {
	children: React.ReactNode
}

export const Layout = ({ children }: IProps) => {
	const [callRequestModalOpened, setCallRequestModalOpened] = useState(false)
	const openCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(true)
	}, [])

	const closeCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(false)
	}, [])
	return (
		<>
			<Header className=" layout__header" openCallRequestModal={openCallRequestModal} />
			<CallRequestModal opened={callRequestModalOpened} close={closeCallRequestModal} />
			{children}
			<Footer className=" layout__footer" />
		</>
	)
}
