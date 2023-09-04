import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Layout } from '../modules/Layout'
import { ConsultationRequestModal } from '../modules/ConsultationRequestModal'
import { SuccessModal } from '../modules/SuccessModal'
import { Promo } from '../modules/Promo'
import { AboutUs } from '../modules/AboutUs'
import { Guarantee } from '../modules/Guarantee'
import { OurServices } from '../modules/OurServices'
import { OurTeam } from '../modules/OurTeam'
import { OurReviews } from '../modules/OurReviews'
import { FlexibleApproach } from '../modules/FlexibleApproach'
import { Contacts } from '../modules/Contacts'

import '../shared/styles/common.scss'
import '../shared/styles/index.scss'

const IndexPage: React.FC<PageProps> = () => {
	const { t } = useTranslation('index')
	const [consultationRequestModalOpened, setConsultationRequestModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)

	const submitRequestModalHandler = useCallback(() => {
		closeConsultationRequestModal()
		openSuccessModal()
	}, [])

	const openConsultationRequestModal = useCallback(() => {
		setConsultationRequestModalOpened(true)
	}, [])

	const closeConsultationRequestModal = useCallback(() => {
		setConsultationRequestModalOpened(false)
	}, [])

	const openSuccessModal = useCallback(() => {
		setSuccessModalOpened(true)
	}, [])

	const closeSuccessModal = useCallback(() => {
		setSuccessModalOpened(false)
	}, [])

	return (
		<Layout>
			<title>{t('title')}</title>
			<main id="index" className="index">
				<Promo className=" index__promo" openConsultationRequestModal={openConsultationRequestModal} />
				<AboutUs className=" index__aboutUs" />
				<Guarantee className=" index__guarantee" openConsultationRequestModal={openConsultationRequestModal} />
				<OurServices className=" index__ourServices" />
				<OurTeam className=" index__ourTeam" />
				<OurReviews className=" index__ourReviews" />
				<FlexibleApproach className=" index__flexibleApproach" />
				<Contacts className=" index__contacts" />
			</main>
			<ConsultationRequestModal
				opened={consultationRequestModalOpened}
				close={closeConsultationRequestModal}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={closeSuccessModal} />
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => {
	const { t } = useTranslation('index')
	return <title> {t('title')} </title>
}

export const query = graphql`
	query {
		locales: allLocale {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`
