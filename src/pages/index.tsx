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

import { requestConsultation } from '../shared/api'
import '../shared/styles/common.scss'
import '../shared/styles/index.scss'

const IndexPage: React.FC<PageProps> = () => {
	const { t } = useTranslation('index')
	const [consultationRequestModalOpened, setConsultationRequestModalOpened] = useState(false)
	const [successModalOpened, setSuccessModalOpened] = useState(false)
	const [openedService, setOpenedService] = useState<string | number | null>(null)

	const submitRequestModalHandler = useCallback((formData: FormData) => {
		setConsultationRequestModalOpened(false)
		setSuccessModalOpened(true)
		requestConsultation(formData)
	}, [])

	return (
		<Layout>
			<title>{t('title')}</title>
			<main id="index" className="index">
				<Promo
					setOpenedService={setOpenedService}
					className=" index__promo"
					openConsultationRequestModal={() => setConsultationRequestModalOpened(true)}
				/>
				<AboutUs className=" index__aboutUs" />
				<Guarantee
					className=" index__guarantee"
					openConsultationRequestModal={() => setConsultationRequestModalOpened(true)}
				/>
				<OurServices
					openedService={openedService}
					setOpenedService={setOpenedService}
					className=" index__ourServices"
				/>
				<OurTeam className=" index__ourTeam" />
				<OurReviews className=" index__ourReviews" />
				<FlexibleApproach className=" index__flexibleApproach" />
				<Contacts className=" index__contacts" />
			</main>
			<ConsultationRequestModal
				opened={consultationRequestModalOpened}
				close={() => setConsultationRequestModalOpened(false)}
				submit={submitRequestModalHandler}
			/>
			<SuccessModal opened={successModalOpened} close={() => setSuccessModalOpened(false)} />
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => {
	return <title>OLP</title>
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
