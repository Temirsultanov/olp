import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'OLP',
		siteUrl: `https://olp.su`
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/
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
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png'
			}
		}
	]
}

export default config
