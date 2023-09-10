import * as React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'

import { Layout } from '../modules/Layout'

import '../shared/styles/common.scss'
import '../shared/styles/privacy.scss'

type InnerListItem = {
	title: string
	list: string[]
}

const IndexPage: React.FC<PageProps> = () => {
	const { t } = useTranslation('privacy')
	const content = {
		title: t('privacyPolicy'),
		1: {
			title: t('1.title'),
			description: t('1.description'),
			list: t('1.list', { returnObjects: true }) as string[]
		},
		2: {
			title: t('2.title'),
			list: t('2.list', { returnObjects: true }) as string[]
		},
		3: {
			title: t('3.title'),
			list: t('3.list', { returnObjects: true }) as InnerListItem[]
		},
		4: {
			title: t('4.title'),
			list: t('4.list', { returnObjects: true }) as InnerListItem[]
		},
		5: {
			title: t('5.title'),
			list: t('5.list', { returnObjects: true }) as string[]
		},
		6: {
			title: t('6.title'),
			list: t('6.list', { returnObjects: true }) as InnerListItem[]
		},
		7: {
			title: t('7.title'),
			list: t('7.list', { returnObjects: true }) as string[]
		},
		8: {
			title: t('8.title'),
			description: t('8.description'),
			list: t('8.list', { returnObjects: true }) as string[]
		},
		9: {
			title: t('9.title'),
			list: t('9.list', { returnObjects: true }) as string[]
		},
		10: {
			title: t('10.title'),
			list: t('10.list', { returnObjects: true }) as string[]
		},
		11: {
			title: t('11.title'),
			description: t('11.description')
		},
		12: {
			title: t('12.title'),
			list: t('12.list', { returnObjects: true }) as string[]
		}
	}

	return (
		<Layout>
			<main id="privacy" className="privacy">
				<div className="privacy__content">
					<h1>{content.title}</h1>
					<ol>
						<li>
							<h2>{content[1]['title']}</h2>
							<p>{content[1]['description']}</p>
							<ol>
								<li>
									<p>{content[1]['list'][0]}</p>
								</li>
								<li>
									<p>{content[1]['list'][1]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[2]['title']}</h2>
							<ol>
								<li>
									<p>{content[2]['list'][0]}</p>
								</li>
								<li>
									<p>{content[2]['list'][1]}</p>
								</li>
								<li>
									<p>{content[2]['list'][2]}</p>
								</li>
								<li>
									<p>{content[2]['list'][3]}</p>
								</li>
								<li>
									<p>{content[2]['list'][4]}</p>
								</li>
								<li>
									<p>{content[2]['list'][5]}</p>
								</li>
								<li>
									<p>{content[2]['list'][6]}</p>
								</li>
								<li>
									<p>{content[2]['list'][7]}</p>
								</li>
								<li>
									<p>{content[2]['list'][8]}</p>
								</li>
								<li>
									<p>{content[2]['list'][9]}</p>
								</li>
								<li>
									<p>{content[2]['list'][10]}</p>
								</li>
								<li>
									<p>{content[2]['list'][11]}</p>
								</li>
								<li>
									<p>{content[2]['list'][12]}</p>
								</li>
								<li>
									<p>{content[2]['list'][13]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[3]['title']}</h2>
							<ol>
								<li>
									<p>{content[3]['list'][0]['title']}</p>
									<ul>
										<li>
											<p>{content[3]['list'][0]['list'][0]}</p>
										</li>
										<li>
											<p>{content[3]['list'][0]['list'][1]}</p>
										</li>
										<li>
											<p>{content[3]['list'][0]['list'][2]}</p>
										</li>
									</ul>
								</li>
								<li>
									<p>{content[3]['list'][1]['title']}</p>
									<ul>
										<li>
											<p>{content[3]['list'][1]['list'][0]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][1]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][2]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][3]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][4]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][5]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][6]}</p>
										</li>
										<li>
											<p>{content[3]['list'][1]['list'][7]}</p>
										</li>
									</ul>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[4]['title']}</h2>
							<ol>
								<li>
									<p>{content[4]['list'][0]['title']}</p>
									<ul>
										<li>
											<p>{content[4]['list'][0]['list'][0]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][1]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][2]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][3]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][4]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][5]}</p>
										</li>
									</ul>
								</li>
								<li>
									<p>{content[4]['list'][1]['title']}</p>
									<ul>
										<li>
											<p>{content[4]['list'][0]['list'][0]}</p>
										</li>
										<li>
											<p>{content[4]['list'][0]['list'][1]}</p>
										</li>
									</ul>
								</li>
								<li>
									<p>{content[4]['list'][2]['title']}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[5]['title']}</h2>
							<ol>
								<li>
									<p>{content[5]['list'][0]}</p>
								</li>
								<li>
									<p>{content[5]['list'][1]}</p>
								</li>
								<li>
									<p>{content[5]['list'][2]}</p>
								</li>
								<li>
									<p>{content[5]['list'][3]}</p>
								</li>
								<li>
									<p>{content[5]['list'][4]}</p>
								</li>
								<li>
									<p>{content[5]['list'][5]}</p>
								</li>
								<li>
									<p>{content[5]['list'][6]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[6]['title']}</h2>
							<ol>
								<li>
									<h3>{content[6]['list'][0]['title']}</h3>
									<ul>
										<li>
											<p>{content[6]['list'][0]['list'][0]}</p>
										</li>
									</ul>
								</li>
								<li>
									<h3>{content[6]['list'][1]['title']}</h3>
									<ul>
										<li>
											<p>{content[6]['list'][1]['list'][0]}</p>
										</li>
									</ul>
								</li>
								<li>
									<h3>{content[6]['list'][2]['title']}</h3>
									<ul>
										<li>
											<p>{content[6]['list'][2]['list'][0]}</p>
										</li>
									</ul>
								</li>
								<li>
									<h3>{content[6]['list'][3]['title']}</h3>
									<ul>
										<li>
											<p>{content[6]['list'][3]['list'][0]}</p>
										</li>
									</ul>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[7]['title']}</h2>
							<ol>
								<li>
									<p>{content[7]['list']['0']}</p>
								</li>
								<li>
									<p>{content[7]['list']['1']}</p>
								</li>
								<li>
									<p>{content[7]['list']['2']}</p>
								</li>
								<li>
									<p>{content[7]['list']['3']}</p>
								</li>
								<li>
									<p>{content[7]['list']['4']}</p>
								</li>
								<li>
									<p>{content[7]['list']['5']}</p>
								</li>
								<li>
									<p>{content[7]['list']['6']}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[8]['title']}</h2>
							<p>{content[8]['description']}</p>
							<ol>
								<li>
									<p>{content[8]['list'][0]}</p>
								</li>
								<li>
									<p>{content[8]['list'][1]}</p>
								</li>
								<li>
									<p>{content[8]['list'][2]}</p>
								</li>
								<li>
									<p>{content[8]['list'][3]}</p>
								</li>
								<li>
									<p>{content[8]['list'][4]}</p>
								</li>
								<li>
									<p>{content[8]['list'][5]}</p>
								</li>
								<li>
									<p>{content[8]['list'][6]}</p>
								</li>
								<li>
									<p>{content[8]['list'][7]}</p>
								</li>
								<li>
									<p>{content[8]['list'][8]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[9]['title']}</h2>
							<ol>
								<li>
									<p>{content[9]['list'][0]}</p>
								</li>
								<li>
									<p>{content[9]['list'][1]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[10]['title']}</h2>
							<ol>
								<li>
									<p>{content[10]['list'][0]}</p>
								</li>
								<li>
									<p>{content[10]['list'][0]}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[11]['title']}</h2>
							<ol>
								<li>
									<p>{content[11]['description']}</p>
								</li>
							</ol>
						</li>
						<li>
							<h2>{content[12]['title']}</h2>
							<ol>
								<li>
									<p>{content[12]['list'][0]}</p>
								</li>
								<li>
									<p>{content[12]['list'][1]}</p>
								</li>
								<li>
									<p>{content[12]['list'][2]}</p>
								</li>
							</ol>
						</li>
					</ol>
				</div>
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
