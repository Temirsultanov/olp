import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import { Header } from '../modules/layout/Header'
import { Promo } from '../modules/Promo'
import { AboutUs } from '../modules/AboutUs'
import { Guarantee } from '../modules/Guarantee'
import { OurServices } from '../modules/OurServices'
import { OurTeam } from '../modules/OurTeam'
import { OurReviews } from '../modules/OurReviews'
import { FlexibleApproach } from '../modules/FlexibleApproach'
import { Contacts } from '../modules/Contacts'
import { Footer } from '../modules/layout/Footer'

import '../shared/styles/index.scss'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Header className=" app__header" />
			<main id="index">
				<Promo className=" index__promo" />
				<AboutUs className=" index__aboutUs" />
				<Guarantee className=" index__guarantee" />
				<OurServices className=" index__ourServices" />
				<OurTeam className=" index__ourTeam" />
				<OurReviews className=" index__ourReviews" />
				<FlexibleApproach className=" index__flexibleApproach" />
				<Contacts className=" index__contacts" />
			</main>
			<Footer className=" app__footer" />
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
