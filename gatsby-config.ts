import type { GatsbyConfig } from 'gatsby'
import { languages } from './languages'

const config: GatsbyConfig = {
	siteMetadata: {
		title: `OLP — Эффективная доставка и логистические решения`,
		siteUrl: `http://olp.gatsbyjs.io`,
		description: `OLP — ваш надежный партнер в области логистики и грузоперевозок. Мы предоставляем комплексные решения для эффективной доставки и управления грузами.`,
		keywords: `Логистика, Доставка грузов, Логистические решения, Складирование и хранение, Международная перевозка, Грузоперевозки, Логистический партнер, Логистика и транспорт, Профессиональные логистические услуги, Эффективная логистика, ВЭД, Законный обход санкций , Таможенное оформление, Сертификационные услуги`
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /icons/
				}
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locales`
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png'
			}
		},
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaults: {
					placeholder: 'none',
					backgroundColor: `transparent`
				}
			}
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: 'locales',
				languages: languages,
				siteUrl: `http://olp.gatsbyjs.io`,
				defaultLanguage: 'ru',
				generateDefaultLanguagePage: 'ru'
			}
		}
	]
}

export default config
