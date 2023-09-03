import React, { useCallback, useState } from 'react'
import { CallRequestModal } from '../../modules/CallRequestModal'
import { CallRequestSuccess } from '../../modules/CallRequestSuccess'
import { Header } from './Header'
import { Footer } from './Footer'
import './style.scss'

interface IProps {
	children: React.ReactNode
}

export const Layout = ({ children }: IProps) => {
	const [callRequestModalOpened, setCallRequestModalOpened] = useState(false)
	const [callRequestSucessOpened, setCallRequestSuccessOpened] = useState(false)

	const submitRequestModalHandler = useCallback(() => {
		closeCallRequestModal()
		openCallRequestSuccess()
	}, [])

	const openCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(true)
	}, [])

	const closeCallRequestModal = useCallback(() => {
		setCallRequestModalOpened(false)
	}, [])

	const openCallRequestSuccess = useCallback(() => {
		setCallRequestSuccessOpened(true)
	}, [])

	const closeCallRequestSuccess = useCallback(() => {
		setCallRequestSuccessOpened(false)
	}, [])

	return (
		<>
			<Header className=" layout__header" openCallRequestModal={openCallRequestModal} />
			<CallRequestModal
				opened={callRequestModalOpened}
				close={closeCallRequestModal}
				submit={submitRequestModalHandler}
			/>
			<CallRequestSuccess opened={callRequestSucessOpened} close={closeCallRequestSuccess} />
			{children}
			<Footer className=" layout__footer" />
		</>
	)
}
