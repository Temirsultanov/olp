import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Edge } from './types'

export function isMobile(vw: number) {
	return vw < 769
}

export function getPhotosFromGraphQLResult(allFile: { edges: Array<Edge> }) {
	const photos: { [index: number]: IGatsbyImageData } = {}

	if (Array.isArray(allFile.edges)) {
		allFile.edges.forEach((edge: Edge) => {
			const id = parseInt(edge.node.relativePath.split('/')[1])
			photos[id] = edge.node.childImageSharp.gatsbyImageData
		})
	}

	return photos
}
