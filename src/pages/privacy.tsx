import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'
import { Layout } from '../modules/Layout'

import '../shared/styles/common.scss'
import '../shared/styles/privacy.scss'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<main id="policy">
				<h1 className="heading-l">Политика конфиденциальности</h1>
				<p className="text-l">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio sunt, dicta officiis corporis quis
					officia rem facere id sed dolor iusto at ipsam ipsa facilis adipisci? A esse rem qui corrupti aliquam neque
					magnam eos, ullam hic inventore nemo culpa totam, voluptate nulla reprehenderit, dignissimos assumenda dolorem
					placeat ipsum aliquid mollitia quas adipisci eum quidem. Distinctio aut, iure sunt sit rerum porro dolores qui
					magnam deserunt tempore dolore. Ullam, esse? Assumenda quae vitae saepe quasi beatae consectetur quo, corporis
					eum at. Dignissimos cupiditate voluptatem nam consequatur minima ducimus quas sapiente pariatur! Delectus
					perferendis beatae magni? Deleniti consequatur ipsum consequuntur?
				</p>
				<h2 className="heading-m">Некий подзаголовок</h2>
				<p className="text-l">
					Pariatur natus doloremque illo obcaecati porro et, dignissimos dolor sed. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Architecto, commodi eos quod repellendus veniam, delectus neque explicabo
					ratione nam ab impedit possimus facilis in soluta eligendi omnis id dolor, consectetur sed?
				</p>
				<p className="text-l">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, commodi eos quod repellendus veniam,
					delectus neque explicabo ratione nam ab impedit possimus facilis in soluta eligendi omnis id dolor,
					consectetur sed? Pariatur natus doloremque illo obcaecati porro et, dignissimos dolor sed.
				</p>
				<p className="text-l">
					Architecto, commodi eos quod repellendus veniam, delectus neque explicabo ratione nam ab impedit possimus
					facilis in soluta eligendi omnis id dolor, consectetur sed? Pariatur natus doloremque illo obcaecati porro et,
					dignissimos dolor sed.
				</p>
			</main>
		</Layout>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Privacy Policy</title>

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
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
