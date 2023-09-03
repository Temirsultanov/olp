import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import { Layout } from '../modules/Layout
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
	return (
		<Layout>
			<main id="index" className="index">
				<Promo className=" index__promo" />
				<AboutUs className=" index__aboutUs" />
				<Guarantee className=" index__guarantee" />
				<OurServices className=" index__ourServices" />
				<OurTeam className=" index__ourTeam" />
				<OurReviews className=" index__ourReviews" />
				<FlexibleApproach className=" index__flexibleApproach" />
				<Contacts className=" index__contacts" />
			</main>
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
